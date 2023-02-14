const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All routes "starts with" / (root)

// POST /movies/:id/reviews
router.post('/sitterListings/:id/reviews', ensureLoggedIn, reviewsCtrl.create);



