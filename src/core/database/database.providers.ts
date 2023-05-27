import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE } from '../Constants';
import { Temperament } from '../../module/temperaments/temperaments.entity';
import { Breed } from '../../module/breeds/breeds.entity';
import { BreedsTemperaments } from '../throughModels/breeds_temps.entity';


dotenv.config();

export const databaseProviders = [{
  provide: SEQUELIZE,
  useFactory: async () => {
    const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
    const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    });
    sequelize.addModels([Temperament, Breed, BreedsTemperaments]);
    await sequelize.sync({ force:true });
    return sequelize;
  },
}];