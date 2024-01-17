import { Table, Column, DataType, HasMany } from 'sequelize-typescript';
import { BaseModel } from 'src/core/database/database.models';
import { Mouse } from '../mice/mouse.entity';

@Table({
  tableName: 'cats',
  underscored: true,
  indexes: [
    {
      name: 'firstName',
      fields: ['first_name'],
    },
    {
      name: 'lastName',
      fields: ['last_name'],
    },
  ],
})
export class Cat extends BaseModel {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  lastName: string;

  @Column({
    type: DataType.STRING,
  })
  image?: string;

  @Column({
    type: DataType.STRING,
  })
  description: string;

  @HasMany(() => Mouse, { onDelete: 'CASCADE' })
  mice: ReturnType<() => Mouse[]>;
}
