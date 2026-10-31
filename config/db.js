require("dotenv").config();

const { Pool } = require("pg");

const db = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

db.connect()
  .then(() => {
    console.log("Database Connected ✅");
  })
  .catch((error) => {
    console.log("Database Connection Failed ❌");
    console.log(error.message);
  });

module.exports = db;