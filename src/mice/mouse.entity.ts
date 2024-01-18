import {
  Entity,
  PrimaryKey,
  Property,
  ManyToOne,
  Index,
} from '@mikro-orm/core';
import { v4 } from 'uuid';
import { Cat } from 'src/cats/cat.entity';

@Entity({
  tableName: 'mice',
})
@Index({ properties: ['cat'] })
export class Mouse {
  @PrimaryKey()
  id = v4();

  @Property({ type: 'text' })
  name!: string;

  @Property({ type: 'text' })
  image?: string;

  @Property({ type: 'date' })
  createdAt = new Date();

  @Property({ onUpdate: () => new Date(), type: 'date' })
  updatedAt = new Date();

  @ManyToOne(() => Cat, { nullable: true })
  cat?: ReturnType<() => Cat>;
}
