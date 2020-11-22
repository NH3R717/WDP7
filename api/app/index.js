// ! PACKAGE IMPORTS

const error = require("debug")("api:error");
const express = require("express");
// const bodyParser = require("body-parser");
const morganDebug = require("morgan-debug");
const cors = require("cors");
const path = require("path")

// ! ROUTES IMPORT

// const authRouter = require("./routes/auth");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const notificationsRouter = require("./routes/notifications");
const searchRouter = require("./routes/search");

// ! EXTRA ROUTES IMPORTS

const audiosRouter = require("./routes/audios")
const notificationsTextsRouter = require("./routes/notificationstexts")
const imagesRouter = require("./routes/images")
const videosRouter = require("./routes/videos")

// ! EXPRESS APP

const app = express();

// app.use(bodyParser.json());
// ? takes the place of "body-parser"
app.use(express.json());
app.use(morganDebug("api:request", "dev"));
app.use(cors());

// ! routes use
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/notifications", notificationsRouter);
app.use("/api/search", searchRouter);

// ! extra routes
pp.use("/api/audios", audiosRouter);
app.use("/api/notificationText", notificationsTextsRouter);
app.use("/api/images", imagesRouter);
app.use("/api/videos", videosRouter);

// ! look in react build folder for static assets
app.use(express.static(path.join(__dirname, "../../client/build")));

// ! keep commented
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
  res.sendFile(path.join(__dirname, "../../client/build", "index.html"));
});

// ! EXPORT

module.exports = app;
