const SitterListing = require('../models/sitterlisting');


module.exports = {

create,

}

function create(req, res) {
    SitterListing.findById(req.params.id, function(err, sitterListing) {
        req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    // We push an object with the data for the
    // review subdoc into Mongoose arrays
    sitterListing.reviews.push(req.body);
    sitterListing.save(function(err) {
        // Step 5: Respond with a redirect because we've mutated data
        res.redirect(`/sitterlistings/${sitterListing._id}`);

        });
    });
}