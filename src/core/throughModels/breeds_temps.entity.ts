import { Model, Table, Column, DataType, ForeignKey } from 'sequelize-typescript';
import { Breed } from 'src/module/breeds/breeds.entity';
import { Temperament } from 'src/module/temperaments/temperaments.entity';

@Table({
  timestamps:false,
})
export class BreedsTemperaments extends Model<BreedsTemperaments> {
  @ForeignKey(() => Breed)
  @Column({
    type:DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
    breedId;

  @ForeignKey(() => Temperament)
  @Column({
    type:DataType.ARRAY(DataType.INTEGER),
  })
    temperamentId;
}