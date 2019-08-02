const mongoose = require('mongoose')
const fs = require('fs')

mongoose.connect("mongodb://localhost:27017/memory", { useNewUrlParser: true })
// const words = fs.readFileSync('words.txt', 'utf8')
// const arrAllWords = words.split('\r\n')
const Schema = mongoose.Schema;
const wordsSchema = new Schema({
    value: String,
})

const Words = mongoose.model("Words", wordsSchema);


// console.log(arrAllWords.length);


async function addWords() {
    for (let i = 0; i < 500; i++) {
        const words = new Words({ value: arrAllWords[i] })
        await words.save()
    }  
}
// addWords()




module.exports = Words;