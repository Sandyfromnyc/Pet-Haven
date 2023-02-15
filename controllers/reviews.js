const SitterListing = require("../models/sitterlisting");

module.exports = {
  create,
  delete: deleteReview

};

function create(req, res) {
  SitterListing.findById(req.params.id, function (err, sitterListing) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    // We push an object with the data for the
    // review subdoc into Mongoose arrays
    sitterListing.reviews.push(req.body);
    sitterListing.save(function (err) {
      // Step 5: Respond with a redirect because we've mutated data
      res.redirect(`/sitterlistings/${sitterListing._id}`);
    });
  });
}

// Include the next parameter - used for error handling in the catch
function deleteReview(req, res, next) {
    // Note the cool "dot" syntax to query on the property of a subdoc
    Movie.findOne({'reviews._id': req.params.id, 'reviews.user': req.user._id}).then(function(movie) {
      // Rogue user!
      if (!sitterListing) return res.redirect('/sitterListings');
      // Remove the review using the remove method available on Mongoose arrays
      sitterListing.reviews.remove(req.params.id);
      // Save the updated movie
      sitterListing.save().then(function() {
        // Redirect back to the movie's show view
        res.redirect(`/sitterListings/${sitterListing._id}`);
      }).catch(function(err) {
        // Let Express display an error
        return next(err);
        // res.redirect(`/movies/${movie._id}`);
      });
    });
  }
