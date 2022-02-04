//console.log("Hello World");
var express = require('express');
var app = express();

// Serve an HTML File
app.get("/", (req, res) => {
    //res.send("Hello Express");
    res.sendFile(__dirname + "/views/index.html");
  });

// Serve Static Assets  (stylesheets, scripts, images, etc.)
app.use("/public", express.static(__dirname + "/public"));



 module.exports = app;
