import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table
export class Temperament extends Model<Temperament> {
  @Column({ 
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  })
    id;

  @Column({
    unique: true,
    allowNull: false,
    type: DataType.STRING,
  })
    name;

}