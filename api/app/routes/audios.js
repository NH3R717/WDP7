// ! IMPORTS

// import the express router
const router = require("express").Router();

// import import CRUD functions
const audiosCtrl = require("../controllers/audios");

// import the protected route – middleware
const protectedRoute = require("../utils/protectedRoute");

router.post("/", protectedRoute, audiosCtrl.createNotification);

router.get("/", protectedRoute, audiosCtrl.readAudios);

router.put("/:id", audiosCtrl.updateAudios);


router.delete("/:id", audiosCtrl.deleteAudios);

// ! EXPORT

module.exports = router;