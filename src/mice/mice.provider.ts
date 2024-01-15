import { MICE_REPOSITORY } from './mice.constants';
import { Mouse } from './mouse.entity';

export const miceProviders = [
  {
    provide: MICE_REPOSITORY,
    useValue: Mouse,
  },
];
