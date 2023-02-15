var express = require('express');
var router = express.Router();

const servicesCtl = require('../controllers/services');

router.post('/sitterListings/:id/services', servicesCtl.create);


module.exports = router;