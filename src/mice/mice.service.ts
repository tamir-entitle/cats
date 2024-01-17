import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import type { IMouse } from './mice.types';
import { Mouse } from './mouse.entity';
import { MICE_REPOSITORY } from './mice.constants';
import { Op } from 'sequelize';

@Injectable()
export class MiceService {
  constructor(
    @Inject(MICE_REPOSITORY)
    private miceRepository: typeof Mouse,
  ) {}

  async create(mouse: Partial<IMouse>): Promise<Mouse> {
    const mouseInstance = await this.miceRepository.create<Mouse>(mouse);
    const mouseObject = mouseInstance.toJSON();
    delete mouseObject.catId;
    return mouseObject;
  }

  async linkToCat(mouseId: string, catId: string): Promise<Mouse> {
    try {
      const mouse = await this.miceRepository.findByPk<Mouse>(mouseId);
      mouse.catId = catId;
      await mouse.save();
      return mouse;
    } catch (e) {
      console.error(e);
      throw new NotFoundException('Mouse not found');
    }
  }

  async findAll(): Promise<Mouse[]> {
    return this.miceRepository.findAll<Mouse>({
      where: {
        cat_id: { [Op.is]: null },
      },
    });
  }
}
