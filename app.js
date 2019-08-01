const express = require('express');
const path = require('path');
const logger = require('morgan');
const session = require('express-session')
const FileStore = require('session-file-store')(session)

const indexRouter = require('./routes/index')
const testRouter = require('./routes/test')

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/memory', { useNewUrlParser: true });

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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', testRouter);

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;