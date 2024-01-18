import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { Mouse } from './mouse.entity';

@Injectable()
export class MiceService {
  constructor(
    @InjectRepository(Mouse)
    private readonly miceRepository: EntityRepository<Mouse>,
    private readonly em: EntityManager,
  ) {}

  async create(mouse: Partial<Mouse>): Promise<Mouse> {
    const newMouse: Mouse = this.miceRepository.create(mouse);
    await this.em.persistAndFlush(newMouse);
    return newMouse;
  }

  async findAll(): Promise<Mouse[]> {
    return this.miceRepository.findAll({ where: { cat: { $eq: null } } });
  }

  async findOne(id): Promise<Mouse> {
    return this.miceRepository.findOne(id);
  }
}
