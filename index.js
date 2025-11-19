const express=require("express");
const bodyParser=require("body-parser");
const app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});