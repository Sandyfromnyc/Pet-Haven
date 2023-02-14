const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema({
    photoUrl: {
        type: String,
    
    },
    
    listing: {
        type: Schema.Types.ObjectId,
        ref: 'Sitterlisting', 
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      userName: String,
      userAvatar: String

});



module.exports = mongoose.model('Photo', photoSchema);