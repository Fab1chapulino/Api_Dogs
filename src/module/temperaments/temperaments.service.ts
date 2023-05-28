import { Injectable, Inject } from '@nestjs/common';
import { TEMPERAMENTS_REPOSITORY } from 'src/core/Constants';
import { Temperament } from './temperaments.entity';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { TemperamentDto } from './dto/temperament.dto';


@Injectable()
export class TemperamentsService {
  constructor(
    @Inject(TEMPERAMENTS_REPOSITORY) private readonly tempsRepository: typeof Temperament,
    private configService: ConfigService) {}

  async getTemps():Promise<Temperament[]> {
    try {

      const API_KEY  = this.configService.get<string>('API_KEY');
      let temperaments: any[] = await this.tempsRepository.findAll();

      if (!temperaments.length) {
        const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        for (let i = 0; i < data.length; i++) {
          if (data[i].temperament) {
            temperaments = temperaments.concat(data[i].temperament.split(', '));
          } else {
            continue;
          }
        }

        const setOfTemperaments: Set<any> = new Set(temperaments);
        temperaments = [...setOfTemperaments];
        const temps: { name:string }[] = temperaments.map(t=>{
          return { name: t };
        });

        temperaments = await this.createTemps(temps);
        return temperaments;
      } else {
        return temperaments;
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async createTemps(temps: TemperamentDto[]):Promise<Temperament[]> {
    const dbTemps = await this.tempsRepository.bulkCreate<Temperament>(temps);
    return dbTemps;
  }

}
