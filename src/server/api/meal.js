const express = require("express");
const app = express();
const router = express.Router();
const connection = require("./../db");

router.get("/", (request, response) => {
  connection.query("SELECT * FROM `meals`", function(error, results, fields) {
    response.json(results);
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
  });
});

router.get("/:mealId", (request, response) => {
  connection.query(
    `SELECT * FROM meals WHERE idmeals=${
      request.params.mealId
    }; SELECT * FROM \`reservations\` where mealId = ${request.params.mealId}`,
    function(error, results, fields) {
      response.json({
        title: results[0][0].title,
        number_of_guests: results[0][0].number_of_guests,
        reservations: results[1]
      });
      // error will be an Error if one occurred during the query
      // results will contain the results of the query
      // fields will contain information about the returned results fields (if any)
    }
  );
});

router.post("/", (request, response) => {
  connection.query("INSERT INTO meals SET ?", request.body, function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    response.json(results);
  });
});

module.exports = router;
