//console.log("Hello World");
var express = require('express');
var app = express();

var absolutePath = __dirname + "/views/index.html";


// Serve an HTML file
app.get("/", (req, res) => {
    //res.send("Hello Express");
    res.sendFile(absolutePath);
  });


// Serve Static Assets (images, scripts, CSS, etc) 
app.use("/public", express.static(__dirname + "/public"));

