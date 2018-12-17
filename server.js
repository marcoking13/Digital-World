const express = require("express");
const app = express();
const port = 4000;
const mongojs = require("mongojs");
const database = "Digi_DD";
const babelFill = require('babel-polyfill');
const Moves = require("./config/moves.js");
const cors = require('cors')
app.use(cors());
var bodyParser = require("body-parser");
app.use(bodyParser());
const collections = ["profile","digimon","worlds","starter"];
var db = mongojs(database,collections);
const Digimon = require("./config/digimon.js");
const Test = require("./config/test.js");
app.listen(port,()=>{
  console.log("Server is running on localhost:4000");
});


app.get("/api/digimon",(req,res)=>{
     res.json(Digimon);
});

app.get("/api/starter",(req,res)=>{

     res.json(Test);
});

app.get("/api/moves",(req,res)=>{
  res.json(Moves);
})

app.post("/api/profile",(req,res)=>{
  console.log(req.body.data);
  db.profile.insert(req.body.data,(err,ress)=>{console.log(ress,err)});
});
app.get("/api/profile",(req,res)=>{

});
