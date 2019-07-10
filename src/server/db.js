const mysql = require("mysql");

// Importing environment files
require("dotenv").config();

let connection;

function connectDatabase() {
  if (!connection) {
    connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      multipleStatements: true
    });

    connection.connect(function(err) {
      if (!err) {
        console.log("Database is connected!");
      } else {
        console.log("Error connecting database!");
        console.error(err);
      }
    });
  }
  return connection;
}

module.exports = connectDatabase();
