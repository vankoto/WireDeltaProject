//I am doing the same as I did for the user model.

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var companySchema = new Schema({
    _id: Schema.Types.ObjectId,
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
    timestamps: true
});

var Companies = mongoose.model('Companies', companySchema);

module.exports = Companies;
