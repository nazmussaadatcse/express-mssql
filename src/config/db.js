import { Sequelize } from "sequelize";
import personModel from "../models/person.model.js";
import dotenv from "dotenv";
dotenv.config();


const sequelize = new Sequelize(
  process.env.MSSQL_DATABASE,
  process.env.MSSQL_USERNAME,
  process.env.MSSQL_PASSWORD,
  {
    host: process.env.MSSQL_SERVER,
    port: process.env.MSSQL_PORT,
    dialect: process.env.MSSQL_DIALECT,
    dialectOptions: {
      options: { encrypt: false },
    },
  }
);

const db = {};
db.sequelize = sequelize;
// db.cuisines = cuisineModel(sequelize);
db.persons = personModel(sequelize);
// db.refreshtokens = refreshTokenModel(sequelize);
// sync all models with database
// sequelize.sync({ alter: true });

export default db;