import * as dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE } from '../Constants';

dotenv.config();

export const databaseProviders = [{
  provide: SEQUELIZE,
  useFactory: async () => {
    const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
    const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    });
    sequelize.addModels([]);
    await sequelize.sync({ force:true });
    return sequelize;
  },
}];