// ToDO
// !
// *
// ?

// ! PACKAGE IMPORTS

const error = require("debug")("api:error");
const express = require("express");
const morganDebug = require("morgan-debug");
const cors = require("cors");
const path = require("path");

// ! ROUTES IMPORT

const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const notificationsRouter = require("./routes/notifications");
const searchRouter = require("./routes/search");

// ! EXPRESS APP

const app = express();

// ? const bodyParser = require("body-parser");

// ? takes the place of body-parser

app.use(express.json());
// app.use(bodyParser.json());

app.use(morganDebug("api:request", "dev"));
app.use(cors());

// ! routes use
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/notifications", notificationsRouter);
app.use("/search", searchRouter);

// ! look in react build folder for static assets
app.use(express.static(path.join(__dirname, "../../reactjs/build")));

// eslint-disable-next-line no-unsaved-vars
app.use((err, req, res, next) => {
  error("ERROR FOUND:", err);
  res.status(err.code || 500).json({
    message: error.message,
    error,
  });
});

// ! something for react
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../reactjs/build", index.html));
});

// ! EXPORT

module.exports = app;
