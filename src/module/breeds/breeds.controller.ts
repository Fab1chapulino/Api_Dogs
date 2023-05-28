import { Controller, Post, Body } from '@nestjs/common';
import { BreedsService } from './breeds.service';
import { BreedDto } from './dto/breeds.dto';

@Controller('breeds')
export class BreedsController {
  constructor(private breedsService:BreedsService) {}

  @Post('create')
  postBreed(@Body() breed:BreedDto) {
    return this.breedsService.createBreed(breed);
  }
}
