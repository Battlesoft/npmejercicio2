let express = require('express');
let app = express();

console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));

const absolutePath = __dirname + '/views/index.html';

let json = {
    message: "Hello json"
}

app.get("/", function(req, res) {
    res.sendFile(absolutePath);
})

app.get("/json", function(req,res) {

    res.json(json);
})
































 module.exports = app;
