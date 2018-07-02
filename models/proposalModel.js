
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var proposalSchema = new Schema({
    date:{
      type: Date,
      default: Date.now
    },
    timestamps: true,
    description: String,
    negotiable: Boolean,
    status:{
      type: String,
      enum: ['pending', 'accepted', 'rejected', 'canceled']
    },
    companyId: {
      type: Schema.Types.ObjectId,
      ref: 'Companies'
    },
    jobId: {
      type: Schema.Types.ObjectId,
      ref: 'Jobs'
    },
    timestamps: true
});

var Proposals = mongoose.model("Proposals", proposalSchema);

module.exports = Proposals;
