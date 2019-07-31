const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/Avito", { useNewUrlParser: true })
const Schema = mongoose.Schema;
const wordsSchema = new Schema({
    value: String,
})

const Words = mongoose.model("Words", wordsSchema);
module.exports = Words;