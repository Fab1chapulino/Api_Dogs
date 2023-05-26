import { Module } from '@nestjs/common';
import { temperamentsProviders } from './temperaments.providers';
import { TemperamentsService } from './temperaments.service';

@Module({
  providers: [...temperamentsProviders, TemperamentsService],
})
export class TemperamentsModule {}
