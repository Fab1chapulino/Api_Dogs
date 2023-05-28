import { Module } from '@nestjs/common';
import { temperamentsProviders } from './temperaments.providers';
import { TemperamentsService } from './temperaments.service';
import { TemperamentsController } from './temperaments.controller';

@Module({
  providers: [...temperamentsProviders, TemperamentsService],
  exports: [...temperamentsProviders, TemperamentsService],
  controllers: [TemperamentsController],
})
export class TemperamentsModule {}
