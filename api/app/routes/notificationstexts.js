// ! IMPORTS

// import the express router
const router = require("express").Router();

// import import CRUD functions
const notificationsTextsCtrl = require("../controllers/notificationText");

// import the protected route – middleware
const protectedRoute = require("../utils/protectedRoute");

router.post("/", protectedRoute, notificationsTextsCtrl.createNotificationsTexts);

router.get("/", protectedRoute, notificationsTextsCtrl.readNotificationsTexts);

router.put("/:id", notificationsTextsCtrl.updateNotificationsTexts);

router.delete("/:id", notificationsTextsCtrl.deleteNotificationsTexts);

// ! EXPORT

module.exports = router;
