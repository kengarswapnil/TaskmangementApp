// const { Sequelize } = require("sequelize");
// require("dotenv").config();

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASS,
//   {
//     host: process.env.DB_HOST,
//     dialect: "mysql",   
//   },
// );

// async function ConnectDB(params) {
//   try {
//     await sequelize.authenticate();
//     console.log("Database Connected Sucessfully");

//     await sequelize.sync({alter:false});
//     console.log("Models syncronized Sucessfully");
//   } catch (error) {
//     console.log(error);
//   }
// }

// ConnectDB();

// module.exports = { sequelize };


const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",

    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // important for Railway
      },
    },

    logging: false, // optional (clean console)
  }
);

async function ConnectDB() {
  try {
    await sequelize.authenticate();
    console.log("✅ Database Connected Successfully");

    // 👇 ADD THIS (important if you want tables auto sync)
    await sequelize.sync({ alter: false });
    console.log("✅ Models Synced");
    
  } catch (error) {
    console.log("❌ DB Error:", error);
  }
}

ConnectDB();

module.exports = { sequelize };