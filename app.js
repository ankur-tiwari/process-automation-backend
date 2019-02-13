const express = require('express');
const favicon = require('static-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const constants = require('./constant.json')
const app = express();
require('dotenv').config()
const routes = require('./routes/routes');


app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', '*');
    response.setHeader('Access-Control-Allow-Headers', '*')
    next();
})

app.use('/', routes);

  
// catch 404 and forwarding to error handler
app.use(function(request, response, next) {
    response.status(constants.HttpStatus.NOT_FOUND)
    response.send(constants.ERROR.NO_URL_FOUND)
});


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(error, request, response, next) {
        response.status(error.status || 500);
        response.render('error', {
            message: error.message,
            error: error
        });
    });
}


app.use(function(error, request, response, next) {
    response.status(error.status || 500);
    response.send(constants.ERROR.SOMETHING_WENT_WRONG);
});

module.exports = app;
