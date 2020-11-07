const axios = require("axios");
const error = require("debug")("api:error");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Users } = require("../models");
const salt = 10;

// route test
// router.get("/test", async (req, res) => {
//   console.log("testing api...");
//   res.json({ test: true });
// });

// ! data to db
// in-app signup
exports.signup = async (req, res) => {
  console.log("api/controllers/auth.js – signup()");
  // needs to be let
  let { username, email, password } = req.body;
  try {
    console.log("password before hash – ", password);
    password = await bcrypt.hash(password, salt);
    // username = username.toLowerCase();
    console.log("password after hash – ", password);
    const user = await Users.create({
      username,
      email,
      password,
    });
    console.log("api/controllers/auth.js – signup() – users ", user);
    const token = jwt.sign({ id: user.id }, process.env.SECRET);
    console.log("api/controllers/auth.js – signup() – token ", token);
    res.json({ token, loggedIn: true });
  } catch (e) {
    console.log("api/controllers/auth.js – signup() – !error");
    error(e);
    const errors = e.errors.map((err) => err.message);
    res.status(401).json({ errors, loggedIn: false });
  }
};
// login
exports.login = async (req, res) => {
  console.log("api/controllers/auth.js – !");
  const { username, password } = req.body;
  console.log("api/controllers/auth.js – ", username);
  // ! it works
  const [user] = await Users.findAll({ where: { username } });
  console.log("api/controllers/auth.js – auth() – ", user);
  if (!user) {
    console.log("api/controllers/auth.js – !user");
    res.status(403).json({ loggedIn: false });
    // res.redirect("/login");
    return;
  }
  bcrypt.compare(password, user.password).then((response) => {
    if (!response) {
      console.log("api/controllers/auth.js – bcrypt.compare – !response");
      res.status(403).json({ loggedIn: false });
      // res.redirect("/login");
      return;
    }
  });

  const token = jwt.sign({ id: user.id }, process.env.SECRET);
  res.json({ token, loggedIn: true });
};

exports.forgotPassword = async (req, res) => {};

exports.resetPassword = async (req, res) => {};
//
