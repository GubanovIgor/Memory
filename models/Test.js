const mongoose = require('mongoose')
const { userSchema } = require('./User')
mongoose.connect("mongodb://localhost:27017/Avito", { useNewUrlParser: true })
const Schema = mongoose.Schema;
const testSchema = new Schema({
    user: [userSchema],
    countRight: Number,
    positionRight: Number,
    total: String,
})

const Words = mongoose.model("Words", wordsSchema);
module.exports = Words;