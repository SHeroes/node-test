require('dotenv').config()
const createError   = require('http-errors');
const express       = require('express');
const app           = express();
const cors          = require('cors')
const path          = require('path');
const cookieParser  = require('cookie-parser');
const logger        = require('morgan');

// routes
const indexRouter   = require('./routes/index');
const usersRoute    = require('./routes/api/users');
const policiesRoute = require('./routes/api/policies');
const loginRoute    = require('./routes/api/login');
const logoutRoute   = require('./routes/api/logout');
const refreshToken  = require('./routes/api/refreshToken');
const homeRoute     = require('./routes/home/home');
const errorRoute    = require('./routes/error/error');



app.use(cors({origin: '*', optionsSuccessStatus: 200 }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/',                    indexRouter);
app.use('/api/v1/users',        usersRoute);
app.use('/api/v1/policies',     policiesRoute);
app.use('/api/v1/login',        loginRoute);
app.use('/api/v1/refreshToken', refreshToken);
app.use('/api/v1/logout',       logoutRoute);
app.use('/home',                homeRoute);
app.use('/error',               errorRoute);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.send('Internal Error Server - General Section');
});

module.exports = app;


