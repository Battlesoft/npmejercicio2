let express = require('express');
let app = express();

console.log("Hello World");

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());



app.get("/name", (req,res) => {
  var firstName = req.query.first;
  var lastName = req.query.last;
  // OR you can destructure and rename the keys
  var { first: firstName, last: lastName } = req.query;
  // Use template literals to form a formatted string
  res.json({
    name: `${firstName} ${lastName}`
  });
})



app.get("/:world/echo", (req,res) => {
  const { world } = req.params;
  res.json({echo: world});
})

app.get("/now",(req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({time: req.time});
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
