const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({ 
    serviceType: {
       type: String,
    enum: ['Dog sitting', 'Dog walking', 'Boarding', 'Drop-In visit']
    },
    date: {
      type: Date,
      default: function() {
        let apptDate = new Date().getFullYear().getMonth().getDate()
        return apptDate++;
      }
    },

    sitter: {
      type: Schema.Types.ObjectId,
      ref: 'Sitterlisting', 
  },

    time: {
      type: String,
      enum: ['9:00am - 10:00am', '11:00am - 12:00pm', '2:00pm - 3:00pm', '4:00pm - 5:00pm']
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




module.exports = mongoose.model('Appointment', appointmentSchema);