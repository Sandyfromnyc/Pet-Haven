var express = require('express');
const ensureLoggedIn = require('../config/ensureLoggedIn');
var router = express.Router();


const servicesCtl = require('../controllers/services');

router.post('/sitterListings/:id/services', servicesCtl.create);

router.delete('/services/:id', servicesCtl.delete);

module.exports = router;
