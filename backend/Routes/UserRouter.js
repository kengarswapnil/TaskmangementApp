const express = require("express");
const router = express.Router();
const {auth} = require('../middleware/auth')
const uploadImage =  require('../middleware/multer')
const UserController = require("../Controllers/USerController");

router.post("/register",uploadImage.single('ProfileImg'), UserController.register);
router.post("/login", UserController.Login);
router.get('/getuserProfile',auth,UserController.getProfile);
router.get('/getAllusers',UserController.getAllusers);
router.get('/totalUser',UserController.getTotaluser);
router.delete('/deleteUser/:id',UserController.DeleteUser)
router.patch('/updateProfile',auth, uploadImage.single("ProfileImg"),UserController.EditProfile)
router.patch('/changepassword',auth,UserController.changePassword)


module.exports = router;
