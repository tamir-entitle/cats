import {
  Collection,
  Entity,
  Index,
  OneToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { v4 } from 'uuid';
import { Mouse } from 'src/mice/mouse.entity';

@Entity({
  tableName: 'cats',
})
@Index({ properties: ['firstName'] })
@Index({ properties: ['lastName'] })
export class Cat {
  @PrimaryKey()
  id = v4();

  @Property()
  firstName!: string;

  @Property()
  lastName!: string;

  @Property()
  image?: string;

  @Property()
  description?: string;

  @Property()
  createdAt = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt = new Date();

  @OneToMany({
    entity: () => Mouse,
    mappedBy: 'cat',
  })
  mice = new Collection<Mouse>(this);
}
