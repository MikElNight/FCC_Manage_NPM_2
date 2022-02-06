require('dotenv').config();
var bodyParser = require("body-parser");
/**********************************************/
var express = require('express');
var app = express();
/**********************************************/
// Implement a Root-Level Request Logger Middleware
app.use((req, res, next) => {
    console.log(req.method + " " + req.path + " - " + req.ip);
    next();
});
/**********************************************/
// GET route handler for home URL ("/") that serves an HTML File ("/views/index.html")
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
  });
/**********************************************/
// USE Static Assets from directory (stylesheets, scripts, images, etc.)
app.use("/public", express.static(__dirname + "/public"));
/**********************************************/
// Use body-parser to Parse POST Requests
app.use(bodyParser.urlencoded({extended: false}));
/**********************************************/
// GET route handler for ("/json") that serves a JSON file
app.get("/json", (req, res) => {
    // Check environment variables defined on the ".env" File
    if (process.env.MESSAGE_STYLE=="uppercase") 
        res.json({"message": "HELLO JSON"});
    else res.json({"message": "Hello json"});
  });
/**********************************************/
// GET route handler for ("/now") that Chain Middleware to Create a Time Server
app.get("/now",
    (req, res, next) => {
      // adding a new property to req object in the middleware function
      req.time = new Date().toString();
      next();
    },
    (req, res) => {
      // accessing the newly added property in the main function
      res.send({time: req.time});
    }
  );
/**********************************************/
// GET route handler for ("/:word/echo") that uses Route Parameter Input from the User/Client and returns json
// http://localhost:3000/HelloWorld/echo
app.get("/:word/echo", (req, res) => {
    res.json({echo: req.params.word}) ;
  });
/**********************************************/
// GET route handler for ("/name") that uses Query Parameter Input from the User/Client and returns json
// http://localhost:3000/name?first=luis&last=fonseca
app.get("/name", (req, res) => {
    res.json( {name: req.query.first + " " + req.query.last} ) ;
  });
/**********************************************/
// POST route handler for ("/name") that gets Data from POST Requests
// 
app.post("/name", (req, res) => {
    console.log("First name: "+req.body.first);
    console.log("Last name:  "+req.body.last);
    res.json( {name: req.body.first + " " + req.body.last} ) ;
  });
/**********************************************/
 module.exports = app;
/**********************************************/