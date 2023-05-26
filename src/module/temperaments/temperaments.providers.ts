import { Temperament } from './temperaments.entity';
import { TEMPERAMENTS_REPOSITORY } from 'src/core/Constants';

export const temperamentsProviders = [{
  provide: TEMPERAMENTS_REPOSITORY,
  useValue: Temperament,
}];