import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.entity';
import { CreateCatDto } from './cats.validator';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const cats: Cat = await this.catsService.findOne(id);
    return cats;
  }

  @Get()
  async findAll(@Query('query') query: string) {
    const cats: Cat[] = await this.catsService.findAll(query);
    return cats;
  }
  @Post()
  async create(@Body() cat: CreateCatDto) {
    const createdCat: Cat = await this.catsService.create(cat);
    return createdCat;
  }
}
