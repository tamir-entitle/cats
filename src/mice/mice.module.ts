import { Module } from '@nestjs/common';
import { MiceController } from './mice.controller';
import { MiceService } from './mice.service';
import { Mouse } from './mouse.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [MikroOrmModule.forFeature([Mouse])],
  controllers: [MiceController],
  providers: [MiceService],
  exports: [MiceService],
})
export class MiceModule {}
