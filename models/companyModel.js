//I am doing the same as I did for the user model.

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var companySchema = new Schema({
    name: String,
    lat: Number,
    lng: Number,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    logoImgUrl: String,
    cvr: {
        type: String,
        maxlength: 10
    },
    isPaid: Boolean,
    isEnabled: Boolean,
    isVisible: Boolean,
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
});

var Companies = mongoose.model('Companies', companySchema);

module.exports = Companies;
