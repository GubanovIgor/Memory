const mongoose = require('mongoose')
const fs = require('fs')

mongoose.connect("mongodb://localhost:27017/memory", { useNewUrlParser: true })
const Schema = mongoose.Schema;
const wordsSchema = new Schema({
    value: String,
})

const Words = mongoose.model("Words", wordsSchema);

const words = fs.readFileSync('words.txt', 'utf8')
const arrWords = words.split('\r\n')

async function addWords() {
    for (let i = 0; i < arrWords.length; i++) {
        const words = new Words({ value: arrWords[i] })
        await words.save()
    }
}
addWords()
console.log(arrWords)


module.exports = Words;