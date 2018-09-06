'use strict';

var mongoose = require('mongoose'),
    Color = mongoose.model('Colors');

exports.getAllColors = function(req, res) {
    Color.find({}, function(err, colors) {
        if (err) {
            res.send(err);
        }

        res.json(colors);
    });
}

exports.createColor = function(req, res) {
    var newColor = new Color(req.body);
    newColor.save(function(err, color) {
        if (err) {
            res.send(err);
        }

        res.json(color);
    });
}

exports.getColorById = function(req, res) {
    Color.find({"id": req.params.colorId}, function(err, color) {
        if (err) {
            res.send(err);
        }

        res.json(color);
    });
}

exports.updateColor = function(req, res) {
    Color.findOneAndUpdate({ _id: req.params.colorId }, req.body, { new: true }, function(err, color) {
        if (err) {
            res.send(err);
        }

        res.json(color);
    });
}

exports.deleteColor = function(req, res) {
    Color.remove({ _id: req.params.colorId }, function(err, color) {
        if (err) {
            res.send(err);
        }

        res.json({message: 'Color successfully deleted'});
    });
}