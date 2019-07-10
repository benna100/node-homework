const express = require("express");
const app = express();
const mealRouter = require("./api/meal");
const reservationRouter = require("./api/reservation");
const userRouter = require("./api/user");
const router = express.Router();
const connection = require("./db");
const path = require("path");

const buildPath = path.join(__dirname, "../../dist");
app.use(express.static(buildPath));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

router.use("/meals", mealRouter);
router.use("/reservations", reservationRouter);
router.use("/users", userRouter);

app.use("/api", router);

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./../../dist/index.html"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(process.env.PORT || 5000);
