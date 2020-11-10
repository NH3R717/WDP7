// tcp data port data pipeline setup

// setting up logger
const log = require("debug")("api:logging");

// get express app
const app = require("./app");

// set port to either one passed from environment var or 5000
const port = process.env.PORT || 5000;

// ! basic server test
app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

// start server and log running port
app.listen(port, () => console.log(`API listening on port ${port}!`));
