//console.log("Hello World");
var express = require('express');
var app = express();

var absolutePath = __dirname + "/views/index.html";

app.get("/", (req, res) => {
    //res.send("Hello Express");
    res.sendFile(absolutePath);
  });

app.use("/public", express.static(__dirname + "/public"));































 module.exports = app;
