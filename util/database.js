const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "abdallah",
  password: "root",
  database: "nodeexpress",
});

module.exports = pool.promise();
