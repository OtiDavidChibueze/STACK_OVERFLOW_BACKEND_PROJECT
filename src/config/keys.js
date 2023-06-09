require("dotenv").config();

module.exports = {
  DB: process.env.DB_CONNECTION,
  PORT: process.env.PORT,
  SECRET: process.env.SECRET,
};
