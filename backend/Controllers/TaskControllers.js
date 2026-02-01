const sequelize = require("../config/db");
const Task = require("../model/taskModel");

// Create AlL tasks
const CreateTask = async (req, res) => {
  const { title, description, startDate, endDate } = req.body;
  try {
    if (!title || !description || !startDate || !endDate) {
      return res
        .status(400)
        .send({ msg: "All fields Are required", success: true });
    }

    if (new Date(endDate) < new Date(startDate)) {
      return res
        .status(400)
        .send({ msg: "end date must be greater than start date " });
    }

    const newTask = await Task.create({
      title,
      description,
      startDate,
      endDate,
    });

    res.status(201).send({ msg: "Task Created Successfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Server Error" });
  }
};

// get All Tasks
const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    if (tasks.length === 0) {
      res.status(400).send({ tasks:[] });
    }
    res.status(200).send({ tasks });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
};

// get single task
const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const index = await Task.findByPk(id);
    if (!index) {
     return res.status(400).send({ msg: "Task not found" });
    }
    res.status(200).send({ index });
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).send({ msg: "Server Error" });
  }
};

// update the task
const GetUpdateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (!task) {
      res.status(400).send({ msg: "Task Not founnd" });
    }

    const finalstartDate = startDate
      ? new Date(startDate)
      : new Date(task.startDate);
    const finalEndDate = endDate ? new Date(endDate) : new Date(task.endDate);

    if (startDate && isNaN(finalstartDate.getTime())) {
      return res.status(400).send({ msg: "Invalid Start Date" });
    }

    if (endDate && isNaN(finalEndDate.getTime())) {
      return res.status(400).send({ msg: "Invalid End Date" });
    }

    if (finalEndDate < finalstartDate) {
      res.status(400).send({ msg: "End Date Must be After Start Date " });
    }

    await task.update({
      title: req.body.title || task.title,
      description: req.body.description || task.description,
      startDate: finalstartDate,
      endDate: finalEndDate,
    });
    res
      .status(200)
      .send({ msg: "Task updated Successfully", success: true, data: task });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Server Error" });
  }
};

// delete tasks
const DeleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) {
      res.status(400).send({ msg: "Task Not Found", success: false });
    }
    await task.destroy();
    res.status(200).send({ msg: "Task Deleted Successfully", success: true });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
};

// change status task
const changeStatusTask = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(400).send({ msg: "Task Not Found" });
    }

    await task.update({
      status,
    });

    res.status(200).send({ msg: "Status Updated Successfully", data: task });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Server Error" });
  }
};

// completed Task Fetched
const getCompleted = async (req, res) => {
  try {
    const completedTask = await Task.findAll({
      where: { status: "Completed" },
    });
    res
      .status(200)
      .send({ msg: "Completed Tasks Fetched", data: completedTask });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
};

// pending task fetched
const getPendingTasks = async (req, res) => {
  try {
    const PendingTask = await Task.findAll({ where: { status: "Pending" } });
    res.status(200).send({ msg: "Pending Task Fetched", data: PendingTask });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
};

const getInprogressTask = async (req, res) => {
  try {
    const InProgressTask = await Task.findAll({
      where: { status: "Inprogress" },
    });
    res.status(200).send({ msg: "Pending Task Fetched", data: InProgressTask });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
};

const getTaskStatus = async (req, res) => {
  const { status } = req.query;
  try {
    if (!status) {
      res.status(400).send({ msg: "Status is Required" });
    }

    const validStatus = ["Pending", "Completed", "Inprogress"];
    if (!validStatus.includes(status)) {
      return res.status(400).send({ msg: "Invalid Status value" });
    }

    const tasks = await Task.findAll({ where: { status } });
    res.status(200).send({ msg: "Fetched by Status", data: tasks });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
};

// gettaskbymonths

const getTaskbyMonths = async (req, res) => {
  try {
    const {month,year} = req.query;
    if(!month || !year){
      res.status(400).send({msg:"All Fields required"})
    }

    const tasks = await Task.findAll({
      where:{startDate:{
        [sequelize.between]:[
          new Date(year,month - 1 , 1),
          new Date(year,month,0)
        ],
      },},
    })
    res.status(200).send({data:tasks})
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
};

module.exports = {
  CreateTask,
  getAllTask,
  getSingleTask,
  GetUpdateTask,
  DeleteTask,
  changeStatusTask,
  getCompleted,
  getPendingTasks,
  getInprogressTask,
  getTaskStatus,
  getTaskbyMonths
};
