const express = require("express");
require("dotenv").config();
const cors = require("cors");

const taskRoutes = require("./Routes/TaskRoutes");
const userRoutes = require("./Routes/UserRouter");
const connectdb = require("./config/db");

const app = express();

app.use(cors());

// middleware
app.use(express.json());

app.use("/", taskRoutes);
app.use("/", userRoutes);

const port = process.env.PORT || 5006;

app.listen(port, () => {
  console.log(`Server running at http://localhost${port}`);
});
