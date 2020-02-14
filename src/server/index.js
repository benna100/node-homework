const express = require("express");
const app = express();
const mealRouter = require("./api/meal");
const reservationRouter = require("./api/reservation");
const router = express.Router();
const path = require("path");

// Serve the built client html
const buildPath = path.join(__dirname, "../../dist");
app.use(express.static(buildPath));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

router.use("/meals", mealRouter);
router.use("/reservations", reservationRouter);

app.use("/api", router);

// Ensures that the client router works on reload aswell.
// Sends all requests back to index.html where the routing lib takes over
app.get("/*", function(req, res) {
  console.log(req.params);

  res.sendFile(path.join(__dirname, "./../../dist/index.html"), function(err) {
    if (err) {
      console.log("error");

      res.status(500).send(err);
    }
  });
});

app.listen(process.env.PORT || 5000);
