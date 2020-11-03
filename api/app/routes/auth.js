// import the express router
const router = require("express").Router();

// import the auth controller
const authCtrl = require("../controllers/auth");

// POST /auth/slack - receives a code and will exchange it for a access_token
router.post("auth/slack", authCtrl.exchangeCode_slack);
//
router.post("/login", authCtrl.login);

// POST /user
router.post("/signup", authCtrl.signup);

// export the route from this file
module.exports = router;