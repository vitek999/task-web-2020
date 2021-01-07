import { Sequelize } from 'sequelize-typescript';

export const sequilize: Sequelize = new Sequelize('web', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  models: [`${__dirname}/models`]
});
