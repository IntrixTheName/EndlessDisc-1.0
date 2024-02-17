//Import required modules
const { exec, spawn, execFile, execSync } = require("child_process");
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

//Configure modules with express
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Start the React portion of the app
spawn("npm", ["start"]);

//Test of exec() command, 
/* exec("ffmpeg -version", (err, stdout, stderr) => {
  if (err) throw err;
  //else console.log(stdout);
}); */

//Configure database connection & import the schemas
const mongoose = require("mongoose");
const Notices = require("./models/notices");
const { execArgv } = require("process");

//Perform initial connection to the database
mongoose.connect("mongodb://localhost:27017/endless-disc");
console.log("Connected to Database");

//Get Notices - 
app.get("/get-notices", async (req, res) => {
  //console.log("Triggered /get-notices");
  try {
    let results = await Notices.find().sort({ _id: -1 });
    res.json(results);
  } catch (err) {
    res.send("Something went wrong");
  }
});

app.get("get-notices/:id", async (req, res) => {
  //console.log(`Triggered /get-notices/${req.params['id']}`);
  try {
    let result = await Notices.find({ _id: req.params["id"] });
    res.json(result);
  } catch (err) {
    res.send("Something went wrong");
  }
});

//Listen on the port
app.listen(PORT);
