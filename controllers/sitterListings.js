const SitterListing = require("../models/sitterlisting");
const Service = require("../models/service");

module.exports = {
  index,
  new: newListing,
  create,
  show,
  delete: deleteSitterListing
};

function deleteSitterListing(req, res) {
    SitterListing.findOneAndDelete({_id: req.params.id, user:req.user._id}, function(err) {
        res.redirect('/sitterListings');
    } 
    );
}

function show(req, res) {
  SitterListing.findById(req.params.id, function (err, sitterListing) {
    Service.find({ sitterListing: sitterListing._id },function (err, services) {
        res.render("sitterListings/show", {title: "Service Details",services,sitterListing});
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
