let express = require('express');
let app = express();

console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));

const absolutePath = __dirname + '/views/index.html';
var response = "Hello World".toUpperCase();


app.get("/", function(req, res) {
    res.sendFile(absolutePath);
})

app.get("/json", function(req,res) {

    if (process.env.MESSAGE_STYLE === "uppercase") {
        response = "Hello json".toUpperCase();
      } else {
        response = "Hello json";
      }

      res.json({message:response});

})
































 module.exports = app;
