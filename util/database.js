const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodeexpress", "abdallah", "root", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
