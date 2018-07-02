//Here I am requiring mongoose and creating a user model where I am setting my the Schema for the user.

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    _id: Schema.types.ObjectId,
    active: Boolean,
    profilePic: String,
    name: String,
    email: String,
    password: String,
    phoneNumber: String,
    address: String,
    zipCode: String,
    city: String,
    timestamps: true
});

var Users = mongoose.model('Users', userSchema);

module.exports = Users;
