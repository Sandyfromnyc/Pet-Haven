const SitterListing = require("../models/sitterlisting");
const Service = require("../models/service");
const Photo = require("../models/photo");


module.exports = {
  index,
  new: newListing,
  create,
  show,
  delete: deleteSitterListing
};

function deleteSitterListing(req, res) {
    SitterListing.find({_id: req.params.id, user:req.user._id}, function(err) {
      Service.deleteMany({sitterListing: req.params.id}, function(err) { })
      Photo.deleteMany({sitterListing: req.params.id}, function(err) { })
    })
    SitterListing.findOneAndDelete({_id: req.params.id, user:req.user._id}, function(err) {
        res.redirect('/sitterListings');
    } 
    );
}

function show(req, res) {
  SitterListing.findById(req.params.id, function (err, sitterListing) {
    Service.find({ listing: sitterListing._id },function (err, services) {
      Photo.find({ listing: sitterListing._id}, function(err, photos) {
        res.render("sitterListings/show", {title: "Service Details",services,sitterListing, photos});
        
      })
      });
  });
}

function create(req, res) {
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;
  const sitterListing = new SitterListing(req.body);
  sitterListing.save(function (err) {
    if (err) return res.redirect("/sitterlistings/new");
    console.log(sitterListing);
    res.redirect("/sitterListings");
  });
}

function newListing(req, res) {
  res.render("sitterListings/new", { title: "Add Sitter Listing" });
}

function index(req, res) {
  SitterListing.find({}, function (err, sitterListings) {
    res.render("sitterListings/index", {
      title: "Sitters Page",
      sitterListings,
    });
  });
}
