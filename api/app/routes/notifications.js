// ! IMPORTS

// import the express router
const router = require("express").Router();

// import option controller
const notificationsCtrl = require("../controllers/notifications");

// import the protected route – middleware
// TEMP!
const protectedRoute = require("../utils/protectedRoute");

// ! Basic Test

// router.get("/", async (req, res) => {
//   console.log("testing api (notifications)...");
//   // res.send({ express: "Hello From Express" });
//   res.json({ test: true });
// });

// ! Another Test

// GET  /notification
// TEMP!
// router.get("/", protectedRoute, notificationsCtrl.readNotifications);
// router.get("/", notificationsCtrl.readNotifications);

// ! ROUTES

// POST /notification
// TEMP!
// router.post("/", protectedRoute, notificationsCtrl.createNotification);
router.post("/", protectedRoute, notificationsCtrl.createNotification);

// GET /notification
router.get("/", protectedRoute, notificationsCtrl.readNotifications);
// ! √
// router.get("/", notificationsCtrl.readNotifications);

// GET (user's by id) /notifications/user/:id
// router.get( "/user/:id",protectedRoute,notificationsCtrl.readUserNotifications);
// router.get("/user/:id", notificationsCtrl.readUserNotifications);

// PUT /notifications/:id –
// router.put("/:id", protectedRoute, notificationsCtrl.updateNotification);
router.put("/:id", notificationsCtrl.updateNotification);

// DELETE /notifications/:id
// router.delete("/:id", protectedRoute, notificationsCtrl.deleteNotification);
router.delete("/:notificationId", notificationsCtrl.deleteNotification);

// ! EXPORT

module.exports = router;

// ! (not a functional need in app)

// GET /notifications/:id
// router.get("/:id", protectedRoute, notificationsCtrl.getOneById);