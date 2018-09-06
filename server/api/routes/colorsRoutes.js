'use strict';
module.exports = function(app) {
    var colors = require('../controllers/colorsController');

    // routes
    app.route('/colors')
        .get(colors.getAllColors)
        .post(colors.createColor);

    app.route('/colors/:colorId')
        .get(colors.getColorById)
        .put(colors.updateColor)
        .delete(colors.deleteColor);
}