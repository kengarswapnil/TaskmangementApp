const express = require("express");
const AssigendController = require("../Controllers/AssigenedController");
const {auth,admin } =  require('../middleware/auth')

const router = express.Router();

router.post("/assigendTask",auth,admin, AssigendController.AssigenedTask);
router.get("/getUserAssigned",auth, AssigendController.getUserAssigned);
router.get("/getTasksByUSer",auth, AssigendController.getTasksByUSer);
router.get("/getTaskWithUsers/:taskID",auth, AssigendController.getTaskWithUsers);

module.exports = router;
