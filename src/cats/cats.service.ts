import { Inject, Injectable } from '@nestjs/common';
import { Op } from '@sequelize/core';
import { MiceService } from 'src/mice/mice.service';
import { Mouse } from 'src/mice/mouse.entity';
import type { ICat } from './cats.types';
import { Cat } from './cat.entity';
import { CAT_REPOSITORY } from './cats.constants';

@Injectable()
export class CatsService {
  private readonly includeMiceConfig = [
    {
      model: Mouse,
      as: 'mice',
      attributes: { exclude: ['catId'] },
    },
  ];
  constructor(
    @Inject(MiceService) private readonly miceService: MiceService,
    @Inject(CAT_REPOSITORY) private catsRepository: typeof Cat,
  ) {}

  async create(cat: Partial<ICat>): Promise<Cat> {
    const { mouseId } = cat;
    const createdCat: Cat = await this.catsRepository.create<Cat>(cat);
    await this.miceService.linkToCat(mouseId, createdCat.id);
    const createdCatWithMice: Cat = await this.catsRepository.findByPk<Cat>(
      createdCat.id,
      { include: ['mice'] },
    );
    return createdCatWithMice;
  }
  async findAll(searchText: string): Promise<Cat[]> {
    if (searchText) {
      return this.catsRepository.findAll<Cat>({
        where: {
          [Op.or]: [
            { firstName: { [Op.iLike]: `%${searchText}%` } },
            { lastName: { [Op.iLike]: `%${searchText}%` } },
            { '$mice.name$': { [Op.iLike]: `%${searchText}%` } },
          ],
        },
        include: this.includeMiceConfig,
      });
    }
    return this.catsRepository.findAll<Cat>({
      include: this.includeMiceConfig,
    });
  }
  async findOne(id: string): Promise<Cat> {
    return this.catsRepository.findByPk<Cat>(id, {
      include: this.includeMiceConfig,
    });
  }
}
