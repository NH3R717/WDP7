const router = require("express").Router();
const authCtrl = require("../controllers/auth");

router.post("/", authCtrl.login);

router.post("/signup", authCtrl.signup);

router.put("/reset", authCtrl.resetPassword);

router.post("/forgot", authCtrl.forgotPassword);

// export the route from this file
module.exports = router;
