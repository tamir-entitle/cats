import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/core/database/database.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { MiceModule } from './mice/mice.module';

@Module({
  imports: [DatabaseModule, CatsModule, MiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
