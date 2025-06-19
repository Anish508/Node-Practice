const express = require('express');
const { insertSampleProducts, getProductStats, getProductAnalysis } = require('../controllers/product-controller.js');


const router = express.Router();

router.post("/add", insertSampleProducts)
router.get("/get-filtered", getProductStats)
router.get('/get-analysis', getProductAnalysis)
module.exports = router