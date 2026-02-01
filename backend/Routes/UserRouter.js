const express = require("express");
const router = express.Router();
const {auth} = require('../middleware/auth')

const UserController = require("../Controllers/USerController");

router.post("/register", UserController.register);
router.post("/login", UserController.Login);
router.get('/getuserProfile',auth,UserController.getProfile);
router.get('/getAllusers',UserController.getAllusers);

module.exports = router;
