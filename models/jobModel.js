

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var jobSchema = new Schema({
    _id: Schema.types.ObjectId,
    isEmergency: Boolean,
    title: String,
    description: String,
    allowContactByApp: Boolean,
    canUserBringBoat: Boolean,
    allowPickingFromSpot: Boolean,
    allowRepairOnSpot: Boolean,
    allowContactByPhone: Boolean,
    allowContactByEmail: Boolean,
    lat: Number,
    lng: Number,
    price: Number,
    posted: Boolean,
    dueDate: {
      type: Date,
      default: Date.now
    },
    dueTime: {
      type: Date,
      default: Date.now
    },
    isDone: Boolean,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    timestamps: true
});

var Jobs = mongoose.model('Jobs', jobSchema);

module.exports = Jobs;
