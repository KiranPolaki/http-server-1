

const express = require("express");
const bodyParser = require("body-parser");

// Jenkins demo
//middlewares - when a json is found it puts that json into the req.body

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("Hello get Request!");
});

app.post("/backend-api", (req, res) => {
  res.send("Respoonse will be posted");
});

app.listen(port, () => {
  console.log(`Example App listening to ${port}`);
});

//is it working from jenkins
// change a thing again

// Wrte a comment
// why ar eyou working al lof a sudden
