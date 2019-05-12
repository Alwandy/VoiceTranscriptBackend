const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: { type: String, required: true },
    created_by: { type: String, required: true} ,
    url: { type: String, required: true, unique: true },
    transcriptUrl: { type: String},
    length: {type: Number},
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Recording', schema);