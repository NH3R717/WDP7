// ! IMPORTS

const router = require("express").Router();

const usersCtrl = require("../controllers/users");

const protectedRoute = require("../utils/protectedRoute");

// ! test
router.get("/", protectedRoute, usersCtrl.readUsers);

// ! ROUTES

router.post("/", usersCtrl.createUser);

router.post("/", protectedRoute, usersCtrl.readUsers);

router.get("/", protectedRoute, usersCtrl.readUsers);

router.put("/:id", protectedRoute, usersCtrl.updateUser);

router.delete("/:id", protectedRoute, usersCtrl.deleteUser);

// ! EXPORT

module.exports = router;
