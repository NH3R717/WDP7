const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// const app = express();
const app = require('./app');
const log = require('debug')('api:logging');
const port = process.env.PORT || 5000;
const authRoutes = require("./app/routes/auth");
const usersRoutes = require("./app/routes/users");
const notificationsRoutes = require("./app/routes/notifications");

// Serve any static files

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// ! routes for debugging
// app.use("/api/notifications", notificationsRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/users", usersRoutes);
// app.use("/api/auth", authRoutes);
// app.use(express.static(path.join(__dirname, "../client/build")));

// Handle React routing, return all requests to React app

// ! Test API
// app.get("/api/hello", (req, res) => {
//   res.send({ express: "Hello From Express" });
// });

// ! keep as last route
// ToDo uncomment code below after verifying protected routes

// Heroku
if (
  process.env.NODE_ENV === 'production' ||
  process.env.NODE_ENV === 'staging'
) {
  app.use(express.static('../reactjs/build'));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}


// app.post("/api/world", (req, res) => {
//   console.log(req.body);
//   res.send(
//     `I received your POST request. This is what you sent me: ${req.body.post}`
//   );
// });

app.listen(port, () => log(`API listening on port ${port}!`));