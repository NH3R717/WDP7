const router = require("express").Router();
const authCtrl = require("../controllers/auth");
const bodyParser = require("body-parser");

router.get("/test", async (req, res) => {
  console.log("testing api...");
  // res.send({ express: "Hello From Express" });
  res.json({ test: true });
});

// router.get("/", authCtrl.test);

router.post("/login", authCtrl.login);

router.post("/signup", authCtrl.signup);

router.put("/reset", authCtrl.resetPassword);

router.post("/forgot", authCtrl.forgotPassword);

// export the route from this file
module.exports = router;
