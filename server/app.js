var express = require('express'),
    cors = require('cors'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Color = require('./api/models/colorsModel'),
    bodyParser = require('body-parser');

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Colorsdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure and enable cors
var corsOptions = {
    origin: 'http://localhost:4200',
    optionalSuccessState: 200
};

app.use(cors(corsOptions));

// register routes
var routes = require('./api/routes/colorsRoutes');
routes(app);

// error handling middleware
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log(`RESTful API server started on: ${port}`);