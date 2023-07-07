//jshint esversion:6

const express = require ("express");
const app = express();

app.get("/", function(req, res) {
  res.send("hello world");
});

app.get("/contact", function(req, res) {
  res.send("contact me at: okekekizito@gmail.com");
});

app.get("/about", function(req, res) {
  res.send("Hi, i am kizito. i am a web developer. I have a new found passion which is web development!");
});

app.get("/hobbies", function(req, res) {
  res.send("Hi, i am kizito. my hobby is serving the lord!");
});


app.listen(3000, function() {
  console.log("app is running at port 3000");
});
