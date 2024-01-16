import {
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Cat } from '../cats/cat.entity';
import { BaseModel } from 'src/core/database/database.models';

@Table({
  tableName: 'mice',
  underscored: true,
  indexes: [
    {
      name: 'name',
      fields: ['name'],
    },
    {
      name: 'catId',
      fields: ['cat_id'],
    },
  ],
})
export class Mouse extends BaseModel {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  image?: string;

  @ForeignKey(() => Cat)
  @Column({
    type: DataType.UUID,
  })
  catId: string;

  @BelongsTo(() => Cat)
  cat: Cat;
}
