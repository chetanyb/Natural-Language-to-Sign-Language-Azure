const { Sequelize } = require("sequelize");
require("dotenv").config();
const { PG_USER, PG_PASSWORD } = process.env;

const sequelize = new Sequelize("asl", PG_USER, PG_PASSWORD, {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
