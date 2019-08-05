const express = require('express');
const path = require('path');
const logger = require('morgan');
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const { hbs } = require('./template');

const indexRouter = require('./routes/index');
const testRouter = require('./routes/test');
const userRouter = require('./routes/users');
const getRouter = require('./routes/routerGet');
// const displayRouter = require('./routes/display')


const voiceRouter = require('./routes/voice');


const mongoose = require("mongoose");
mongoose.connect(`mongodb://Igor:onFuture2012@ds159634.mlab.com:59634/heroku_sf801k4k`, { useNewUrlParser: true });

var app = express();
app.use(logger('dev'));

const sessionConfig = {
    secret: "keyboard cat",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new FileStore({}),
}

app.use(session(sessionConfig));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', testRouter);
app.use('/', userRouter);


app.use('/', voiceRouter);

app.use('/', getRouter);
// app.use('/', displayRouter);

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

module.exports = app;