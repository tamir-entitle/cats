import { Body, Controller, Get, Post } from '@nestjs/common';
import { MiceService } from './mice.service';
import { CreateMouseDto } from './mice.validator';
import { Mouse } from './mouse.entity';

@Controller('mice')
export class MiceController {
  constructor(private readonly miceService: MiceService) {}
  @Get()
  async findAll() {
    const mice: Mouse[] = await this.miceService.findAll();
    return mice;
  }
  @Post()
  async create(@Body() mouse: CreateMouseDto) {
    const createdMouse: Mouse = await this.miceService.create(mouse);
    return createdMouse;
  }
}
