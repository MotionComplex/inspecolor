'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ColorsSchema = new Schema({
    colorId: {
        type: String
    },
    name: {
        type: String,
        required: 'Colors'
    },
    hex: {
        type: String
    },
    rgb: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Colors', ColorsSchema)