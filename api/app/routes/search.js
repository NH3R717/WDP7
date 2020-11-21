// ! IMPORTS

// import the express router
const router = require("express").Router();

// import option controller
const searchCtrl = require("../controllers/search");

// import the protected route – middleware
const protectedRoute = require("../utils/protectedRoute");

// ! ROUTES

// GET /search
// router.get("/", protectedRoute, searchCtrl.readSearch);

// ! EXPORT

module.exports = router;