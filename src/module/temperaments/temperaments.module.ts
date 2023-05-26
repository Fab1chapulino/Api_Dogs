import { Module } from '@nestjs/common';
import { temperamentsProviders } from './temperaments.providers';

@Module({
  providers: [...temperamentsProviders],
})
export class TemperamentsModule {}
