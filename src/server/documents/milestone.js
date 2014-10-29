var mongoose = require('mongoose');

var MilestoneSchema = mongoose.Schema({
    pull: Number,
    repo: Number,
    number: Number
});

MilestoneSchema.index({
    pull: 1,
    repo: 1,
    number: 1
}, {
    unique: true
});

var Milestone = mongoose.model('Milestone', MilestoneSchema);

module.exports = {
    Milestone: Milestone
};
