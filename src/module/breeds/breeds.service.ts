import { Inject, Injectable } from '@nestjs/common';
import { BREEDS_REPOSITORY } from 'src/core/Constants';
import { TEMPERAMENTS_REPOSITORY } from 'src/core/Constants';
import { Breed } from './breeds.entity';
import { Temperament } from '../temperaments/temperaments.entity';
import { BreedDto } from './dto/breeds.dto';
import { BreedsTemperaments } from 'src/core/throughModels/breeds_temps.entity';

@Injectable()
export class BreedsService {
  constructor(
    @Inject(BREEDS_REPOSITORY) private breedsRepository: typeof Breed,
    @Inject(TEMPERAMENTS_REPOSITORY) private readonly tempsRepository:typeof Temperament,
  ) {}

  async createBreed(breed: BreedDto):Promise<string> {
    try {
      const { name, height, weight, lifeSpan, temperaments } = breed;
      const newBreed = await this.breedsRepository.create({
        name,
        height,
        weight,
        lifeSpan,
      });
      await newBreed.$add('temperaments', temperaments);
      console.log(newBreed);
      //await newBreed.addTemperaments(temperaments);
      return 'Breed created successfully';
    } catch (error) {
      console.log(error.message);
      return 'Coudn`t create breed';
    }
  }

  async getBreeds():Promise<Breed[]> {
    const allBreeds = await this.breedsRepository.findAll({ include:[this.tempsRepository] });
    return allBreeds;
  }
}
