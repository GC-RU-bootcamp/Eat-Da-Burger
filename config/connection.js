// Set up MySQL connection.
"use strict";

require("dotenv").config();

var db_connect_info = {
  host: process.env.DB_HOST || "localhost" ,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "mildew20",
  database: process.env.DB_DATABASE || "burger_db"
};

var mysql = require("mysql");


var connection = mysql.createConnection( db_connect_info );
  
//   {
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "mildew20",
//   database: "burger_db"
// }


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
