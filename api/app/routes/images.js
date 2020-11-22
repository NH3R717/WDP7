// ! IMPORTS

// import the express router
const router = require("express").Router();

// import import CRUD functions
const imagesCtrl = require("../controllers/images");

// import the protected route – middleware
const protectedRoute = require("../utils/protectedRoute");

router.post("/", protectedRoute, imagesCtrl.createImages);

router.get("/", protectedRoute, imagesCtrl.readImages);

router.put("/:id", imagesCtrl.updateImages);


router.delete("/:id", imagesCtrl.deleteImages);

// ! EXPORT

module.exports = router;