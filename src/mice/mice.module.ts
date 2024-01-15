import { Module } from '@nestjs/common';
import { MiceController } from './mice.controller';
import { MiceService } from './mice.service';
import { miceProviders } from './mice.provider';

@Module({
  controllers: [MiceController],
  providers: [MiceService, ...miceProviders],
  exports: [MiceService],
})
export class MiceModule {}
