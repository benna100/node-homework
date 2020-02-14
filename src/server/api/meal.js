const express = require("express");
const app = express();
const router = express.Router();
const pool = require("./../database");

router.get("/", (request, response) => {
  pool.query("SELECT * FROM `meals`", function(error, results, fields) {
    response.json(results);
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
  });
});

router.get("/:mealId", (request, response) => {
  console.log(request.params.mealId);
  console.log(`SELECT * FROM \`meals\` WHERE idmeals=${request.params.mealId}`);

  pool.query(
    `SELECT * FROM \`meals\` WHERE idmeals=${request.params.mealId}`,
    function(error, results, fields) {
      console.log(results);

      response.json({
        title: "asd",
        number_of_guests: "asd"
      });
      // error will be an Error if one occurred during the query
      // results will contain the results of the query
      // fields will contain information about the returned results fields (if any)
    }
  );
});

router.post("/", (request, response) => {
  pool.query("INSERT INTO meals SET ?", request.body, function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    response.json(results);
  });
});

module.exports = router;
