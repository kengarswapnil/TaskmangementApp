const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
);

async function ConnectDB(params) {
  try {
    await sequelize.authenticate();
    console.log("Database Connected Sucessfully");

    await sequelize.sync({ alter: true });
    console.log("Models syncronized Sucessfully");
  } catch (error) {
    console.log(error);
  }
}

ConnectDB();

module.exports = { sequelize };
