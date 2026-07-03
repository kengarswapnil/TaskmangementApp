const Task = require("../model/taskModel");
const User = require("../model/UserModel");
const Asssigened = require("../model/assigenedTask");
const { auth, admin } = require("../middleware/auth");


// assigened to task to user
const AssigenedTask = async (req, res) => {
  const { userID, taskID } = req.body;
  try {
    const task = await Task.findByPk(taskID);
    const user = await User.findByPk(userID);

    if (!user || !task) {
      return res
        .status(400)
        .send({ msg: "Task and User not founnd", success: false });
    }

    const newAssigendTask = await Asssigened.create({ userID, taskID });
    res.status(200).send({ msg: "Task Assigend Sucessfully", success: true });
  } catch (error) {
    res.status(500).send({
      msg: error.message,
      error: error,
    });
  }
};

// getUserAssigenedTask
const getUserAssigned = async (req, res) => {
  try {
    const AllTasks = await Asssigened.findAll();
    res.status(200).send({ AllTasks });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
};


// uding this find all task of spcific user
const getTasksByUSer = async (req, res) => {
  console.log(req.user)
  const userID = req.user.id;
  try {
    const getTasks = await Asssigened.findAll({
      where: { userID: userID },
      include: [
        {
          model: Task,
          attributes: ["task_id", "title", "startDate", "endDate", "status"],
        },
      ],
    });

    res.status(200).send({ getTasks: getTasks, success: true });
  } catch (error) {
    console.log(error)
    res.status(500).send({ msg:error.message });
  }
};



// used
const getTaskWithUsers = async (req, res) => {
  const taskID =  req.params.taskID
  try {
     const assigenments =  await Asssigened.findAll({where:{
      taskID:taskID
     },include:[
      {
        model:User,
        attributes:["id","name","email"]
      },{
        model:Task

      }
     ]})
     
     res.status(200).send({assigenments})
  } catch (error) {
    res.status(500).send({ msg:error.message });
  }
};

module.exports = {
  AssigenedTask,
  getUserAssigned,
  getTasksByUSer,
 getTaskWithUsers,
};
