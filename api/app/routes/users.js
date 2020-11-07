// ! IMPORTS

// import the express router
const router = require("express").Router();

// import option controller
const usersCtrl = require("../controllers/users");

// import the protected route – middleware
const protectedRoute = require("../utils/protectedRoute");

// ! ROUTES

// POST /notification
router.post("/", usersCtrl.createUser);

// GET  /notification
router.post("/", protectedRoute, usersCtrl.readUsers);

// GET (user's by id) /users/user/:id
router.get("/", protectedRoute, usersCtrl.readUser);

// PUT /users/:id
router.put("/:id", protectedRoute, usersCtrl.updateUser);

// DELETE /users/:id
router.delete("/:id", protectedRoute, usersCtrl.deleteUser);

// ! EXPORT

module.exports = router;
