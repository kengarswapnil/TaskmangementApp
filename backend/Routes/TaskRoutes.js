const express = require('express')
const router = express.Router();
const {auth,admin} = require('../middleware/auth')
const taskController = require('../Controllers/TaskControllers')

router.post('/createTask', taskController.CreateTask)
router.get('/getAllTask',auth,taskController.getAllTask);
router.get('/getsingleTask/:id',taskController.getSingleTask)
router.put('/updateTask/:id',auth,admin ,taskController.GetUpdateTask);
router.delete('/deletetask/:id',auth,admin ,taskController.DeleteTask);
router.patch('/updateStatus/:id',taskController.changeStatusTask);
router.get('/getCompletdTask',taskController.getCompleted);
router.get('/pendingTasks',auth,taskController.getPendingTasks);
router.get('/InProgressTask',auth,taskController.getInprogressTask) ;
router.get('/getTaskByStatus',auth,taskController.getTaskStatus);
router.get('/getTaskByMonth',auth,taskController.getTaskbyMonths);
router.get('/totalTasks',auth,taskController.getTotalTask)
module.exports = router;
