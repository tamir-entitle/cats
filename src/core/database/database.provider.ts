import { Sequelize } from 'sequelize-typescript';
// import { Cat } from 'src/cats/cat.entityOld';
// import { Mouse } from 'src/mice/mouse.entityOld';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'nest-js',
      });
      // sequelize.addModels([Cat, Mouse]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
