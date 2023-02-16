const Service = require("../models/service");


module.exports = {
    create,
    delete: deleteService

};

function create(req, res) {
    req.body.sitterListing = req.params.id; 
    req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
    console.log(req.body.sitterListing, "this is req.body.sitterListings")
    console.log(req.body, "this is req.body") 
    Service.create(req.body, function(err, service) {
        console.log(err)
        res.redirect(`/sitterListings/${req.params.id}`)
    });
}

function deleteService(req, res) {
    Service.findOneAndDelete({_id: req.params.id, sitterListing: req.user._id}, function(err) {
        res.redirect('/sitterListings');
    } 
    );
}