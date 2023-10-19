var express = require('express');
var router = express.Router();
const carsCtrl = require("../controllers/cars")

/* GET cars listing. */
// GET /cars
router.get('/', carsCtrl.index);

module.exports = router;
