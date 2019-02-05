const express = require('express');
const favicon = require('static-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const constants = require('./constant.json')
require('dotenv').config()
var routes = require('./routes/adminRoutes');

var app = express();

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', routes);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    res.status(constants.HttpStatus.NOT_FOUND)
    res.send(constants.ERROR.NO_URL_FOUND)
});


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}


app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send(constants.ERROR.SOMETHING_WENT_WRONG);
});

module.exports = app;
