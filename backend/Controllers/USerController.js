const { where } = require("sequelize");
const User = require("../model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Task = require("../model/taskModel");
require("dotenv").config();
const { auth, admin } = require("../middleware/auth");

// register
const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!req.file) {
      return res.status(400).send({ msg: "Please Upload the Image" });
    }

    if (!name || !email || !password) {
      return res.status(400).send({ msg: "All Fields Required" });
    }
    const existUser = await User.findOne({ where: { email: email } });
    if (existUser) {
      return res.status(409).send({ msg: "User Already Registerd" });
    }

    if (existUser) {
      return res.status(400).send({ msg: "Email Already available" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    let ProfileImg = `uploads/users/${req.file.filename}`;

    if (password.length < 8) {
      res.status(400).send({ msg: "Password must be greater than Eight " });
    }
    await User.create({
      name,
      email,
      password: hashedPassword,
      ProfileImg,
    });

    res
      .status(201)
      .send({ msg: "User Registered Successfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Server Error" });
  }
};

// login
const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(400).send({ msg: "All fields are Required" });
    }
    const existUser = await User.findOne({ where: { email } });
    if (!existUser) {
      res.status(401).send({ msg: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, existUser.password);
    if (!isMatch) {
      res.status(401).send({ msg: "Invalid Credentials" });
    }

    const id = existUser.id;
    const role = existUser.role;

    const token = jwt.sign({ id: id, role: role }, process.env.SECRET_KEY, {
      expiresIn: "2h",
    });

    res.status(200).send({ msg: "Login Successful", success: true, token });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
};

const getProfile = async (req, res) => {
  try {
    console.log("REQ.USER:", req.user);
    const loggedUser = await User.findByPk(req.user.id, {
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
    });

    // if (loggedUser.ProfileImg) {
    //   loggedUser.ProfileImg = `http://localhost:${process.env.PORT}/${loggedUser.ProfileImg}`;
    // }

const BASE_URL = "https://taskmangementapp-jzf0.onrender.com";

if (loggedUser.ProfileImg) {
  loggedUser.ProfileImg = `${BASE_URL}/${loggedUser.ProfileImg}`;
}
    
    res.status(200).send({ loggedUser: loggedUser });
  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).send({ msg: "Server Error" });
  }
};

// getAllusers
const getAllusers = async (req, res) => {
  try {
    const users = await User.findAll();
    if (users.length === 0) {
      res.status(400).send({ users: [] });
    }

    res.status(200).send({ users: users });
  } catch (error) {
    res.status(500).send({ msg: "server Error" });
  }
};

const getTotaluser = async (req, res) => {
  try {
    const count = await User.count();
    res.status(200).send({ TotalUsers: count });
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
};

const changePassword = async (req, res) => {
  try {
    const userId = req.user.id;
    const { oldpassword, newpassword } = req.body;

    if (!oldpassword || !newpassword) {
      return res.status(400).send({ msg: "All field are required" });
    }

    if(oldpassword === newpassword){
      return res.status(400).send({msg:"New password must be different"})
    }

    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(400).send({ msg: "User Not Founnd" });
    }
    
   console.log("Entered Old Password:", oldpassword);
console.log("Stored Hashed Password:", user.password);

    const isMatch = await bcrypt.compare(oldpassword, user.password);
    if (!isMatch) {
      return res.status(400).send({ msg: "Old Password is inCorrect" });
    }

    const hashedPassword = await bcrypt.hash(newpassword, 10);
    await user.update({
      password: hashedPassword,
    });

    res.status(200).send({ msg: "Sucessfully updated Password" });
  } catch (error) {
    console.log(error.res.data)
    res.status(500).send({ msg: "Server Error" });
  }
};

const DeleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(400).send({ msg: "User not found" });
    }

    // ✅ check assigned tasks
    const assignedTaskCount = await Asssigened.count({
      where: { userID: id },
    });

    if (assignedTaskCount > 0) {
      return res.status(400).send({
        msg: "User has assigned tasks, cannot delete ❌",
        success: false,
      });
    }

    await user.destroy();
    res.status(200).send({ msg: "User Deleted Successfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Server Error" });
  }
};

const EditProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);
    const { name, ProfileImg } = req.body;
    const user = await User.findByPk(userId);

    if (!user) {
      res.status(400).send({ msg: "User not found" });
    }

    await user.update({
      name: name || user.name,
      ProfileImg: req.file
        ? `uploads/users/${req.file.filename}`
        : user.ProfileImg,
    });

    res.status(200).send({ msg: "Profile updated successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Server Error" });
  }
};

module.exports = {
  register,
  Login,
  getProfile,
  getAllusers,
  getTotaluser,
  DeleteUser,
  EditProfile,
  changePassword
};
