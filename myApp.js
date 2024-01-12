let express = require('express');
let app = express();

console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));

const absolutePath = __dirname + '/views/index.html';
var response = "Hello World".toUpperCase();


app.get("/", function (req, res) {
  res.sendFile(absolutePath);
})

app.get("/json", function (req, res) {

  if (process.env.VAR_NAME === "allCaps") {
    response = "Hello World".toUpperCase();
  } else {
    response = "Hello World";
  }
})
































module.exports = app;
