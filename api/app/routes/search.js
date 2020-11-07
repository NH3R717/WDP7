// ! IMPORTS

// import the express router
const router = require("express").Router();

// import option controller
const searchCtrl = require("../controllers/search");

// import the protected route – middleware
const protectedRoute = require("../utils/protectedRoute");

// ! ROUTES

// GET /search
router.get("/", protectedRoute, searchCtrl.readSearch);

// ! EXPORT

module.exports = router;

// ! (not a functional need in app)

// GET /searchs/:id
// router.get("/:id", protectedRoute, searchCtrl.getOneById);

// POST /search
// router.post("/", protectedRoute, searchCtrl.createSearch);

// GET (user's by id) /search{?id}
// router.get("/", protectedRoute, searchCtrl.readUserSearch);

// PUT /search/:id –
// router.put("/:id", protectedRoute, searchCtrl.updateSearch);

// DELETE /search/:id
// router.delete("/:id", protectedRoute, searchCtrl.deleteSearch);
