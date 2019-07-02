const http = require("http");
const Meals = require("./Meals.js");
const Meal = require("./Meal.js");
const User = require("./User.js");
const Review = require("./Review.js");

const express = require("express");
const app = express();

app.use("/static", express.static("src/client/"));

app.use((req, res, next) => {
  console.log(req.headers["accept-language"]);
  const isFromDenmark = req.headers["accept-language"].includes("da");
  console.log(isFromDenmark);
  req.isFromDenmark = isFromDenmark;
  next();
});

const header = `
<head>
  <title>test</title>
  <link rel="stylesheet" href="static/index.css">
  <script src="static/index.js"></script>
</head>`;

app.get("/", (req, res, next) => {
  if (req.isFromDenmark) {
    res.send(header + "Velkommen hjem");
  } else {
    res.send(header + "Welcome Home");
  }
});

app.listen(3000);
