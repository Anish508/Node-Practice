const express = require("express");
const { route } = require("./user-routes");
const authMiddleware = require("../middleware/auth-middleware.js");
const router = express.Router();

router.get("/welcome", authMiddleware, (req, res) => {
  const { userId, username, role } = req.userInfo;
  res.json({
    message: "welcome to home page",
    user: {
      _id: userId,
      username,
      role,
    },
  });
});

module.exports = router;
