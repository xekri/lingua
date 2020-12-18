const express = require("express");

const { convert } = require("./generate.js");

const app = express();
app.set("view engine", "pug");

app.get("/", (req, res) => {
  const a = req.query.a || "";
  console.log(a);
  res.render("index", {
    a,
    b: convert(a),
  });
});

app.get("/json/:s", (req, res) => {
  res.json(convert(req.params.s));
});

const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`listening on port ${port}.`);
});
