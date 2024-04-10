//Import required modules
const { exec, spawn, execFile, execSync } = require("child_process");
const { scryptSync, randomBytes, timingSafeEqual } = require("crypto");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const PORT = 5000;

//Configure modules with express
//app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
/*app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});*/

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
const Radio = require("./models/radio");
const User = require("./models/users");
const Test = mongoose.model(
  "Test",
  new mongoose.Schema({}, { strict: false }),
  "test"
);

//Perform initial connection to the database
mongoose.connect("mongodb://localhost:27017/endless-disc");
console.log("Connected to Database");

// TESTING ---------------------------------------------------------------------

app.get("/connection-test/web-server", async (req, res) => {
  res.json({
    message: "server.js is responding",
    port: PORT,
    unix_ms: Date.now(),
  });
});

app.get("/connection-test/database-server", async (req, res) => {
  try {
    let results = await Test.find({ key: "connection-test" });
    res.json(results);
  } catch (error) {
    res.json({ message: "Database not functional", err: error });
  }
});

// USER & LOGIN ----------------------------------------------------------------

app.post("/signup", async (req, res) => {
  const user_info = new User({
    username: req.body["username"],
    email: req.body["email"],
    identity: req.body["password"],
  });

  user_info
    .save()
    .then(function (doc) {
      console.log(`New user id: ${doc._id.toString()}`);
      res.json({ token: doc.username });
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.use("/login", async (req, res) => {
  const user = await User.find({ username: req.body.username });
  console.log(user);
  //if(!user) {res.status(400).send("Unknown Username")}
  //const [salt, key] = user[0].identity.split(':')

  //const hash_buffer = scryptSync(req.body.password, salt, 64)
  //const key_buffer = Buffer.from(key, 'hex');

  //const match = timingSafeEqual(hash_buffer, key_buffer);

  //if(match) {}
  try {
    res.json({ token: user[0].username });
  } catch {
    res.status(400).json({ message: "Login credentials invalid, try again." });
  }
});

// NOTICES ---------------------------------------------------------------------

app.get("/get-notices", async (req, res) => {
  try {
    let results = await Notices.find().sort({ _id: -1 });
    res.json(results);
  } catch (err) {
    res.send("Something went wrong");
  }
});

app.get("/get-notices/:id", async (req, res) => {
  try {
    let result = await Notices.find({ _id: req.params["id"] });
    res.json(result);
  } catch (err) {
    res.send("Something went wrong");
  }
});

// RADIO -----------------------------------------------------------------------

app.get("/get-radio", async (req, res) => {
  try {
    let result = await Radio.find();
    res.json(result);
  } catch (err) {
    res.send("Something went wrong");
  }
});

app.post("/add-radio", async (req, res) => {
  try {
    // Process the request body (form data)
    const formData = req.body;
    if (formData == {}) {
      throw new Error("No form data received");
    }
    // Handle the form data, including the image file
    console.log("Received form data:", formData);
    // Send a response (optional)
    res.json({ message: "Form data received successfully" });
  } catch (error) {
    console.error("Error handling form data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//Listen on the port
app.listen(PORT);
