const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({ 
    serviceType: {
       type: String,
    enum: ['Dog sitting', 'Dog walking', 'Boarding', 'Drop-In visit']
    },
    
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      userName: String,
      userAvatar: String
    }, {
      timestamps: true

});




module.exports = mongoose.model('Service', serviceSchema);