import { Table, Model, Column, DataType, BelongsToMany } from 'sequelize-typescript';
import { BreedsTemperaments } from '../../core/throughModels/breeds_temps.entity';
import { Breed } from '../breeds/breeds.entity';

@Table({
  timestamps:false,
})
export class Temperament extends Model<Temperament> {

  @Column({
    unique: true,
    allowNull: false,
    type: DataType.STRING,
  })
    name;

  @BelongsToMany(() => Breed, () => BreedsTemperaments)
    breeds: Breed[];
}