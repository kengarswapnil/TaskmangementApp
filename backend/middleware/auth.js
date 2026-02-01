const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = async (req, res, next) => {
  try {
    console.log(req.headers.authorization);
    let token = req.headers.authorization;
    if(!req.headers.authorization){
      res.status(400).send({msg:"Please Login"})
    }
    if (!token.startsWith("Bearer")) {
      res.status(400).send({ msg: "Not authorized" });
    }
    token = token.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoded);
    req.user = {
      id: decoded.id,
      role: decoded.role,
    };
    next();
  } catch (error) {
    res.status(500).send({ msg: "Server Error" });
  }
};



const admin = async(req,res)=>{
 if(req.user.role === 'admin'){
  return next();
 }else{
  res.status(400).send({msg:"Not authorized"})
 }
}

module.exports = { auth ,admin };