// ! IMPORTS

// import the express router
const router = require("express").Router();

// import import CRUD functions
const videosCtrl = require("../controllers/videos");

// import the protected route – middleware
const protectedRoute = require("../utils/protectedRoute");

router.post("/", protectedRoute, videosCtrl.createVideos);

router.get("/", protectedRoute, videosCtrl.readVideos);

router.put("/:id", videosCtrl.updateVideos);


router.delete("/:id", videosCtrl.deleteVideos);

// ! EXPORT

module.exports = router;