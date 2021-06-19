const path = require("path");
const express = require("express");
const sassMiddleware = require("node-sass-middleware");

const yue = require("./yue.json");
const show = require("./show.js");

const app = express();
app.set("view engine", "pug");
app.use(
  sassMiddleware({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    indentedSyntax: true,
    outputStyle: "compressed",
    sourceMap: true,
  }),
  express.static(path.join(__dirname, "public"))
);
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index.pug", {
    show,
    text: req.query.s,
    data: data(req.query.s),
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`started on port ${port}.`);
});

const data = s =>
  s ? (
    [...s].map(c =>
      c in yue ? yue[c] : c
    )
  ) : s;