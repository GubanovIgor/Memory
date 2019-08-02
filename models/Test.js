const mongoose = require('mongoose');
const User = require('../models/User');
const { userSchema } = require('./User');
mongoose.connect('mongodb://localhost:27017/memory', { useNewUrlParser: true });
const Schema = mongoose.Schema;
const testSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  firstName: String,
  secondName: String,
  email: String,
  words: [],
  countRight: Number,
  positionRight: Number,
  total: String
});

const Test = mongoose.model('Test', testSchema);

module.exports = { Test };
