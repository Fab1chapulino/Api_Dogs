import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps:false,
})
export class Temperament extends Model<Temperament> {
  @Column({ 
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    type: DataType.INTEGER,
  })
    id;

  @Column({
    unique: true,
    allowNull: false,
    type: DataType.STRING,
  })
    name;

}