import { Module } from '@nestjs/common';
import { breedsProviders } from './breeds.providers';
import { BreedsService } from './breeds.service';
import { BreedsController } from './breeds.controller';
import { TemperamentsModule } from '../temperaments/temperaments.module';

@Module({
  imports:[TemperamentsModule],
  providers:[...breedsProviders, BreedsService],
  exports:[...breedsProviders],
  controllers: [BreedsController],
})
export class BreedsModule {}
