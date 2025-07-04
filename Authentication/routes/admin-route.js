const express = require('express');

const authMiddleware = require('../middleware/auth-middleware.js');
const isUserAdmin = require('../middleware/admin-middleware.js');

const router = express.Router()

router.get('/welcome', authMiddleware, isUserAdmin, (req, res)=>{
  res.json({
    message:"Welcome to the admin page"
  })
})

module.exports = router;