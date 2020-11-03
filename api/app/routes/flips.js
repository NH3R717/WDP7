// import the express router
const router = require("express").Router();

// import option controller
const flipsCtrl = require("../controllers/flips");

// import the protected route – middleware
const protectedRoute = require("../utils/protectedRoute");

// GET /flips route public
router.get("/public", flipsCtrl.getPublic);

// GET /flips route private
router.get("/", flipsCtrl.getPrivate);

// GET /flips route root
router.get("/", flipsCtrl.getAllUsersflips);

// GET a user's /flips route root
router.get("/", protectedRoute, flipsCtrl.getUserflips);

// POST /flips root
router.post("/", protectedRoute, flipsCtrl.createflop);

// GET /flips/:id
router.get("/:id", protectedRoute, flipsCtrl.getOneById);

// PUT /flips/:id
router.put("/:id", protectedRoute, flipsCtrl.updateflop);

// DELETE /flips/:id
router.delete("/:id", protectedRoute, flipsCtrl.deleteflop);

// export the route from this file
module.exports = router;
