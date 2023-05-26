import { Controller, Get } from '@nestjs/common';
import { TemperamentsService } from './temperaments.service';
import { Temperament } from './temperaments.entity';

@Controller('temperaments')
export class TemperamentsController {
  constructor(private TempsService: TemperamentsService) {}

  @Get()
  async getAllTemperaments():Promise<Temperament[]> {
    return this.TempsService.getTemps();
  }

}
