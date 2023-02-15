const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema ({
    service: {
        type: String,
        enum: ['Dog Sitting', 'Dog Walking', 'Boarding', 'Drop-In'],   
    },

    price: {
        type: Number,
        min: 1, 
        max: 9999
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



module.exports = mongoose.model('Service', serviceSchema);