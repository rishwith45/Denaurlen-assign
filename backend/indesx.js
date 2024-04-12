const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userModel = require("./db");
const jwt = require("jsonwebtoken");

const { authenticateJwt, SECRET } = require("./auth");

mongoose.connect(process.env.MANGODB).then(() => {
  console.log("mangodb connected");
});
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.findOne({ username });

  const isMatch = await user.comparePassword(password);
  if (isMatch) {
    const token = jwt.sign({ username, role: "user" }, SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "Logged in successfully", token });
  } else {
    res.json({ message: "Invalid" });
  }
});

app.post("/signup", async (req, res) => {
  const { firstname, lastname, email, location, username, password } = req.body;
  console.log(username);
  const user = await userModel.findOne({ username });
  console.log(user);
  if (user) {
    console.log("heyyyy");
    res.json({ message: "Userexits" });
  } else {
    const newUser = new userModel({
      firstname,
      lastname,
      email,
      location,
      username,
      password,
    });
    console.log(SECRET);
    const ok = await newUser.save();
    console.log(ok);
    const token = jwt.sign({ username, role: "user" }, SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "User created successfully", token });
  }
});

app.listen(8080, () => {
  console.log("sever is running on 5000");
});
