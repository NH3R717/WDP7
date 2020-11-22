// ! IMPORTS

// import the express router
const router = require("express").Router();

// import import CRUD functions
const notificationsCtrl = require("../controllers/notifications");

// import the protected route – middleware
const protectedRoute = require("../utils/protectedRoute");

router.post("/", protectedRoute, notificationsCtrl.createNotification);

router.get("/", protectedRoute, notificationsCtrl.readNotifications);

router.put("/:id", notificationsCtrl.updateNotification);


router.delete("/:id", notificationsCtrl.deleteNotification);

// ! EXPORT

module.exports = router;