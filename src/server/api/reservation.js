const express = require("express");
const app = express();
const router = express.Router();
const connection = require("./../db");

router.get("/", (request, response) => {
  connection.query("SELECT * FROM `reservations`", function(
    error,
    results,
    fields
  ) {
    response.json(results);
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
  });
});

router.post("/", (request, response) => {
  connection.query("INSERT INTO reservations SET ?", request.body, function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    response.json(results);
  });
});

module.exports = router;
