const utils = require("./scripts/utils.js");

const express = require("express");
console.log(express);

const app = express();

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.listen(4444);

setTimeout(() => utils.run(), 1000);
