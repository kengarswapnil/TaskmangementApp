const express = require("express");
require("dotenv").config();
const cors = require("cors");
const path = require('path')

const taskRoutes = require("./Routes/TaskRoutes");
const userRoutes = require("./Routes/UserRouter");
const Assigend =  require('./Routes/assigendRoute')
const connectdb = require("./config/db");

require('./model/assigenedTask');

const app = express();

app.use(cors());

// middleware
app.use(express.json());

app.use("/", taskRoutes);
app.use("/", userRoutes);
app.use('/',Assigend);
app.use('/uploads',express.static(path.join(__dirname,"uploads"))
)

const port = process.env.PORT || 5006;

app.listen(port, () => {
  console.log(`Server running at http://localhost${port}`);
});
