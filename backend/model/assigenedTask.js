  const {sequelize} = require("../config/db");
  const Task = require("../model/taskModel");
  const User = require("../model/UserModel");
  const { DataTypes } = require("sequelize");

  const Asssigened = sequelize.define(
    "AssigenedTask",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true,
      },
      taskID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "task",
          key: "task_id",
        },
      },
      userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
    },
    {  timestamps: true ,tableName: "assigned_tasks" },
  );



  User.hasMany(Asssigened, { foreignKey: "userID" });
  Asssigened.belongsTo(User, { foreignKey: "userID" });

  Task.hasMany(Asssigened, { foreignKey: "taskID" });
  Asssigened.belongsTo(Task, { foreignKey: "taskID" });

  module.exports =  Asssigened;
