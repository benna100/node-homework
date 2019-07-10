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
      port: process.env.DB_PORT,
      multipleStatements: true
    });

    connection.connect(function(err) {
      if (!err) {
        ("Database is connected!");
      } else {
        console.log("Error connecting database!");
        console.error(err);
        setTimeout(connectDatabase, 2000);
      }
    });

    connection.on("error", function(err) {
      if (err.code === "PROTOCOL_CONNECTION_LOST") {
        // Connection to the MySQL server is usually
        connection = undefined;
        connectDatabase(); // lost due to either server restart, or a
      } else {
        // connnection idle timeout (the wait_timeout
        throw err; // server variable configures this)
      }
    });
  }
  return connection;
}

module.exports = connectDatabase();
