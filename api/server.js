const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = require('./app');
const log = require('debug')('api:logging');
const port = process.env.PORT || 5000;
const authRoutes = require("./app/routes/auth");
const usersRoutes = require("./app/routes/users");
const notificationsRoutes = require("./app/routes/notifications");
const audiosRoutes = require("./app/routes/audios");

// Heroku
if (
  process.env.NODE_ENV === 'production' ||
  process.env.NODE_ENV === 'staging'
) {
  app.use(express.static('../client/build'));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

app.listen(port, () => log(`API listening on port ${port}!`));