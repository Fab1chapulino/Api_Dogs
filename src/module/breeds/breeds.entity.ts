import { Column, Model, Table, DataType, BelongsToMany } from 'sequelize-typescript';
import { Temperament } from '../temperaments/temperaments.entity';
import { BreedsTemperaments } from '../../core/throughModels/breeds_temps.entity';

@Table({
  timestamps:false,
})
export class Breed extends Model<Breed> {
  @Column({
    type:DataType.UUID,
    defaultValue:DataType.UUIDV4, // Or DataTypes.UUIDV1
    primaryKey:true,
  })
    id;

  @Column({
    type:DataType.STRING,
    unique:true,
    allowNull:false,
  })
    name;

  @Column({
    type:DataType.STRING,
    allowNull:false,
  })
    height;

  @Column({
    type:DataType.STRING,
    allowNull:false,
  })
    weight;

  @Column({
    type:DataType.STRING,
    allowNull:false,
  })
    lifeSpan;

  @BelongsToMany(() => Temperament, () => BreedsTemperaments)
    temperaments: number[];
}