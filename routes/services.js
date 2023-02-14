const express = require('express');
const router = express.Router();
const serviceCtrl = require('../controllers/services');
const ensureLoggedIn = require('../config/ensureLoggedIn');



router.get('/services/new', ensureLoggedIn, serviceCtrl.new);

module.exports = router;