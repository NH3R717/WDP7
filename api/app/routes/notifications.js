// ! IMPORTS

// import the express router
const router = require("express").Router();

// import option controller
const notificationsCtrl = require("../controllers/notifications");

// import the protected route – middleware
const protectedRoute = require("../utils/protectedRoute");

// ! ROUTES

// POST /notifications root
router.post("/", protectedRoute, notificationsCtrl.createNotification);

// GET /notifications root
router.post("/", protectedRoute, notificationsCtrl.readNotification);

// PUT /notifications/:id –
router.put("/:id", protectedRoute, notificationsCtrl.updateNotification);

// DELETE /notifications/:id
router.delete("/:id", protectedRoute, notificationsCtrl.deleteNotification);

// ! EXPORT

// export the route from this file
module.exports = router;

// ! GET /notifications/:id
// router.get("/:id", protectedRoute, notificationsCtrl.getOneById);

// ! GET a user's /notifications route root
// router.get("/", protectedRoute, notificationsCtrl.getUsernotifications);
