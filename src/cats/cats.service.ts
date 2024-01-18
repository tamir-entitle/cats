import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { MiceService } from 'src/mice/mice.service';
import { Mouse } from 'src/mice/mouse.entity';
import { Cat } from './cat.entity';
import type { ICat } from './cats.types';

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
    // If mouse not found throw error
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

  async findAll(query: string): Promise<Cat[]> {
    if (query) {
      const subQuery = this.em
        .createQueryBuilder(Mouse)
        .select('cat_id')
        .where({ name: { $ilike: `%${query}%` } })
        .getKnexQuery();
      return this.catsRepository.findAll({
        where: {
          $or: [
            { firstName: { $ilike: `%${query}%` } },
            { lastName: { $ilike: `%${query}%` } },
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
