const Photo = require("../models/photo");


module.exports = {
    create,
    delete: deletePhoto

};

function create(req, res) {
    req.body.listing = req.params.id; 
    req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
    console.log(req.body.sitterListing, "this is req.body.sitterListings")
    console.log(req.body, "this is req.body") 
    Photo.create(req.body, function(err, photo) {
        console.log(err)
        res.redirect(`/sitterListings/${req.params.id}`)
    });
}

function deletePhoto(req, res) {
    Photo.findOneAndDelete({_id: req.params.id, sitterListing: req.user._id}, function(err) {
        res.redirect('/sitterListings');
    } 
    );
}