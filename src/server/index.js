const express = require("express");
const app = express();

app.get("/api/meals", (req, res, next) => {
  res.json({ asd: 3 });
});

app.listen(5000);
