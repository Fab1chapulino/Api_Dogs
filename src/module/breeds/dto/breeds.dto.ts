import { Temperament } from 'src/module/temperaments/temperaments.entity';

export interface BreedDto {
  name: string,
  height: string,
  weight: string,
  lifeSpan: string,
  temperaments: number[],
}