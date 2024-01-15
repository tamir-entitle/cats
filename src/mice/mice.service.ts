import { Inject, Injectable } from '@nestjs/common';
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
    return this.miceRepository.create<Mouse>(mouse);
  }

  async linkToCat(mouseId: number, catId: number): Promise<Mouse> {
    const mouse = await this.miceRepository.findByPk<Mouse>(mouseId);
    if (!mouse) {
      throw new Error('Mouse not found');
    }
    mouse.catId = catId;
    await mouse.save();
    return mouse;
  }

  async findAll(): Promise<Mouse[]> {
    return this.miceRepository.findAll<Mouse>({
      where: {
        cat_id: { [Op.is]: null },
      },
    });
  }
}
