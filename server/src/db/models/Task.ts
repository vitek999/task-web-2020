import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table({
  timestamps: false,
  underscored: true
})
export class Task extends Model<Task> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT.UNSIGNED)
  id!: number;

  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.BOOLEAN)
  isDone!: boolean;
}
