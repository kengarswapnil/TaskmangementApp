const { where } = require("sequelize");
const User = require("../model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { auth, admin } = require("../middleware/auth");

// register
const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).send({ msg: "All Fields Required" });
    }
    const existUser = await User.findOne({ where: { email: email } });
    if (existUser) {
      return res.status(409).send({ msg: "User Already Registerd" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    if (password.length < 8) {
      res.status(400).send({ msg: "Password must be greater than Eight " });
    }
    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res
      .status(201)
      .send({ msg: "User Registered Successfully", success: true });
  } catch (error) {
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

module.exports = { register, Login, getProfile,getAllusers };
