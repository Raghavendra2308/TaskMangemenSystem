require("dotenv").config();
const db = require("./config/db");

const express = require("express");

const authRoutes =
require("./routes/authRoutes");


const taskRoutes =
require("./routes/taskRoutes");

const app = express();

app.use(express.json());

app.use("/tasks", taskRoutes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});