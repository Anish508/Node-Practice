const express = require("express");
const authMiddleware = require("../middleware/auth-middleware.js");
const isUserAdmin = require("../middleware/admin-middleware.js");
const uploadMiddleware = require("../middleware/upload-middleware.js");
const {uploadImage,fetchImageController, deleteImageController} = require("../controllers/image-controller.js");

const router = express.Router();

//to upload image
router.post(
  "/upload",
  authMiddleware,
  isUserAdmin,
  uploadMiddleware.single("image"),
  uploadImage
);

//to get all image
router.get("/fetch", fetchImageController);

//delete image
router.delete('/:id', authMiddleware, isUserAdmin , deleteImageController)
module.exports = router;
