const path = require("path");
const express = require("express");
const sassMiddleware = require("node-sass-middleware");

const yue = require("yue.json");

const app = express();
app.set("view engine", "pug");
app.use(
  sassMiddleware({
    src: __dirname,
    dest: path.join(__dirname, "public"),
    indentedSyntax: true,
    outputStyle: "compressed",
    sourceMap: true,
  }),
  express.static(path.join(__dirname, "public"))
);

app.get("/", (req, res) => {
  res.render("index.pug");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`started on port ${port}.`);
});
