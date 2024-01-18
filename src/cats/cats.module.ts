import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { MiceModule } from 'src/mice/mice.module';
import { Cat } from './cat.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [MiceModule, MikroOrmModule.forFeature([Cat])],
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}
