// ! IMPORTS

// import the express router
const router = require("express").Router();

// import option controller
const notificationsCtrl = require("../controllers/notifications");

// import the protected route – middleware
const protectedRoute = require("../utils/protectedRoute");

// ! ROUTES

// POST /notification
router.post("/", protectedRoute, notificationsCtrl.createNotification);

// GET  /notification
router.post("/", protectedRoute, notificationsCtrl.readNotifications);

// GET (user's by id) /notifications/user/:id
router.get("/", protectedRoute, notificationsCtrl.readUserNotifications);

// PUT /notifications/:id –
router.put("/:id", protectedRoute, notificationsCtrl.updateNotification);

// DELETE /notifications/:id
router.delete("/:id", protectedRoute, notificationsCtrl.deleteNotification);

// ! EXPORT

module.exports = router;

// ! (not a functional need in app)

// GET /notifications/:id
// router.get("/:id", protectedRoute, notificationsCtrl.getOneById);
