import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { CatsModule } from './cats/cats.module';
import { MiceModule } from './mice/mice.module';

@Module({
  imports: [MikroOrmModule.forRoot(), CatsModule, MiceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
