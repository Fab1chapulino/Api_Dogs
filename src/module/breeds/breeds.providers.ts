import { BREEDS_REPOSITORY } from 'src/core/Constants';
import { Breed } from './breeds.entity';


export const breedsProviders = [{
  provide:BREEDS_REPOSITORY,
  useValue:Breed,
}];