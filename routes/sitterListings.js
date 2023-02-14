const express = require('express');
const router = express.Router();
const sitterListingsCtrl = require('../controllers/sitterListings');
const ensureLoggedIn = require('../config/ensureLoggedIn');


// GET /sitterListings index
router.get('/', sitterListingsCtrl.index);

// GET /sitterListings/new - displaying a form 
router.get('/new', ensureLoggedIn, sitterListingsCtrl.new);

// POST /sitterListings - handles the new form being submitted
router.post('/', ensureLoggedIn, sitterListingsCtrl.create);



module.exports = router