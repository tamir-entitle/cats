import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { MiceService } from 'src/mice/mice.service';
import { Mouse } from 'src/mice/mouse.entity';
import { Cat } from './cat.entity';
import type { ICat } from './cats.types';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

@Injectable()
export class CatsService {
  constructor(
    @Inject(MiceService) private readonly miceService: MiceService,
    @InjectRepository(Cat)
    private readonly catsRepository: EntityRepository<Cat>,
    private readonly em: EntityManager,
  ) {}

  async create(cat: Partial<ICat>): Promise<Cat> {
    const { mouseId } = cat;
    let mouse: Mouse | null = null;
    try {
      mouse = await this.miceService.findOne(mouseId);
      if (!mouse) {
        throw new Error();
      }
    } catch (e) {
      throw new NotFoundException(
        'Mouse not found' + (e.message ? ': ' + e.message : ''),
      );
    }
    const newCat: Cat = this.catsRepository.create(cat);
    newCat.mice.add(mouse);
    await this.em.persistAndFlush(newCat);
    delete mouse.cat;
    return newCat;
  }

  async findAll(searchText): Promise<Cat[]> {
    if (searchText) {
      const subQuery = this.em
        .createQueryBuilder(Mouse)
        .select('cat_id')
        .where({ name: { $ilike: `%${searchText}%` } })
        .getKnexQuery();
      return this.catsRepository.findAll({
        where: {
          $or: [
            { firstName: { $ilike: `%${searchText}%` } },
            { lastName: { $ilike: `%${searchText}%` } },
            {
              id: {
                $in: subQuery,
              },
            },
          ],
        },
        populate: ['mice'],
      });
    }
    return this.catsRepository.findAll({ populate: ['mice'] });
  }
  async findOne(id): Promise<Cat> {
    return this.catsRepository.findOne(id, { populate: ['mice'] });
  }
}
