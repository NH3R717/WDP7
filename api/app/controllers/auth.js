const axios = require("axios");
const error = require("debug")("api:error");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { Users } = require("../models");

const salt = 10;

// ! √
// in-app signup
exports.signup = async (req, res) => {
  // needs to be let
  let { username, email, password } = req.body;

  try {
    password = await bcrypt.hash(password, salt);
    // username = username.toLowerCase();

    const user = await Users.create({
      username,
      email,
      password,
    });

    const token = jwt.sign({ id: user.id }, process.env.SECRET);
    res.json({ token, loggedIn: true });
  } catch (e) {
    error(e);
    const errors = e.errors.map((err) => err.message);
    res.status(401).json({ errors, loggedIn: false });
  }
};
// ! √
// login
exports.login = async (req, res) => {
  let { email, password } = req.body;
  let [user] = await Users.findAll({ where: { email } });
  if (!user) {
    res.status(403).json({ loggedIn: false });
    // res.redirect("/login");
    return;
  }
  bcrypt.compare(password, user.password).then((response) => {
    if (!response) {
      res.status(403).json({ loggedIn: false });
      // res.redirect("/login");
      return;
    }
  });

  const token = jwt.sign({ id: user.id }, process.env.SECRET);
  res.json({ token, loggedIn: true });
};

// allows user to reset their password via email
exports.forgotPassword = async (req, res) => {
  async.waterfall(
    [
      function (done) {
        User.findOne({
          email: req.body.email,
        }).exec(function (err, user) {
          if (user) {
            done(err, user);
          } else {
            done("User not found.");
          }
        });
      },
      function (user, done) {
        // create the random token
        crypto.randomBytes(20, function (err, buffer) {
          let token = buffer.toString("hex");
          done(err, user, token);
        });
      },
      function (user, token, done) {
        User.findByIdAndUpdate(
          { _id: user._id },
          {
            reset_password_token: token,
            reset_password_expires: Date.now() + 86400000,
          },
          { upsert: true, new: true }
        ).exec(function (err, new_user) {
          done(err, token, new_user);
        });
      },
      function (token, user, done) {
        let data = {
          to: user.email,
          from: email,
          template: "forgot",
          subject: "Setup a new password!",
          context: {
            url: "http://localhost:3000/auth/reset_password?token=" + token,
            name: user.fullName.split(" ")[0],
          },
        };

        smtpTransport.sendMail(data, function (err) {
          if (!err) {
            return res.json({
              message: "Checkout your email to set a new password.",
            });
          } else {
            return done(err);
          }
        });
      },
    ],
    function (err) {
      return res.status(422).json({ message: err });
    }
  );
};

// allow user to set a new passowrd
exports.resetPassword = async (req, res) => {
  User.findOne({
    reset_password_token: req.body.token,
    reset_password_expires: {
      $gt: Date.now(),
    },
  }).exec(function (err, user) {
    if (!err && user) {
      if (req.body.newPassword === req.body.verifyPassword) {
        user.hash_password = bcrypt.hashSync(req.body.newPassword, 10);
        user.reset_password_token = undefined;
        user.reset_password_expires = undefined;
        user.save(function (err) {
          if (err) {
            return res.status(422).send({
              message: err,
            });
          } else {
            let data = {
              to: user.email,
              from: email,
              template: "reset",
              subject: "password Reset Confirmation",
              context: {
                name: user.fullName.split(" ")[0],
              },
            };

            smtpTransport.sendMail(data, function (err) {
              if (!err) {
                return res.json({ message: "password reset" });
              } else {
                return done(err);
              }
            });
          }
        });
      } else {
        return res.status(422).send({
          message: "passwords do not match",
        });
      }
    } else {
      return res.status(400).send({
        message:
          "You took to long to reset your password, request another reset.",
      });
    }
  });
};
