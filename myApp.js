let express = require('express');
let app = express();

console.log("Hello World");

app.get("/now",
  (req, res, next) => {
    req.time(Date().toString());
    req.string = "example";
    next();
  },
  (req, res) => {
    res.send(req.string);
  }
);

app.use(function middleware(req, res, next) {
  var string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
  next();
});



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
