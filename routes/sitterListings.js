const express = require('express');
const router = express.Router();
const sitterListingsCtrl = require('../controllers/sitterListings');
const ensureLoggedIn = require('../config/ensureLoggedIn');


// GET /sitterListings index
router.get('/', sitterListingsCtrl.index);

// GET /sitterListings/new - displaying a form 
router.get('/new', ensureLoggedIn, sitterListingsCtrl.new);

// GET  /sitterListings/:id
router.get('/:id', sitterListingsCtrl.show);

// POST /sitterListings - handles the new form being submitted
router.post('/', ensureLoggedIn, sitterListingsCtrl.create);

router.delete('/:id', sitterListingsCtrl.delete);


module.exports = router