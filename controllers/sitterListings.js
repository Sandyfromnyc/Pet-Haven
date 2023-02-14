const SitterListing = require('../models/sitterlisting');


module.exports = {
    index,
    new: newListing,
    create

}

function create(req, res) {
    
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    const sitterListing = new SitterListing(req.body);
    sitterListing.save(function(err) {
        if(err) return res.redirect('/sitterlistings/new');
        console.log(sitterListing);
        res.redirect('/sitterListings');
    })
}

function newListing(req, res) {
    res.render('sitterListings/new', { title: 'Add Sitter Listing'});
}


function index(req, res) {
    SitterListing.find({}, function(err, sitterListings) {
        res.render('sitterListings/index', { title: 'Sitters Page', sitterListings });
    });

}

