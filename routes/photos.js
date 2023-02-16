var express = require('express');
const ensureLoggedIn = require('../config/ensureLoggedIn');
var router = express.Router();
const photosCtl = require('../controllers/photos');



router.post('/sitterListings/:id/photos', ensureLoggedIn, photosCtl.create);

router.delete('/photos/:id', ensureLoggedIn, photosCtl.delete);

module.exports = router;
