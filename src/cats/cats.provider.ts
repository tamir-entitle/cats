import { CAT_REPOSITORY } from './cats.constants';
import { Cat } from './cat.entity';

export const catsProviders = [
  {
    provide: CAT_REPOSITORY,
    useValue: Cat,
  },
];
