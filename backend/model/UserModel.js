const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../config/db");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allownull: false,
    },
    email: {
      type: DataTypes.STRING,
      allownull: false,
      // unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allownull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "user",
      allownull: false,
    },
    ProfileImg:{
      type:DataTypes.STRING,
      allowNull:true
    }
  },
  { timestamps: true, tableName: "User" },
);

module.exports = User;
