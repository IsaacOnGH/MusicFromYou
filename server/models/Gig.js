const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const gigSchema = new Schema({
    gigTitle: {
        type: String,
        required: 'When you post a gig, you need to include a title!',
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    gigAuthor: {
        type: String,
        required: true,
        trim: true,
    },
    gigDescription: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
        trim: true,
    },
    gigPrice: {
        type: Number,
        required: true,
        trim: true,
    },
    gigLocation: {
        type: String,
        required: true,
        trim: true,
    },
    gigContact: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
});

const Gig = model('Gig', gigSchema);

module.exports = Gig;