import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/core/database/database.module';
import { CatsModule } from './cats/cats.module';
import { MiceModule } from './mice/mice.module';

@Module({
  imports: [DatabaseModule, CatsModule, MiceModule],
})
export class AppModule {}
