// Set up MySQL connection.
"use strict";

require("dotenv").config();

var db_connect_info = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
};

var mysql = require("mysql");


var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "mildew20",
  database: "burger_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
