const express = require("express");
const app = express();
const mealRouter = require("./api/meal");
const reservationRouter = require("./api/reservation");
const userRouter = require("./api/user");
const router = express.Router();
const connection = require("./db");

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

router.use("/meals", mealRouter);
router.use("/reservations", reservationRouter);
router.use("/users", userRouter);

app.use("/api", router);

app.listen(process.env.PORT || 5000);
