const mongoose = require('mongoose')
// const fs = require('fs')

// mongoose.connect(`mongodb://Igor:onFuture2012@ds159634.mlab.com:59634/heroku_sf801k4k`, { useNewUrlParser: true });
// const words = fs.readFileSync('words.txt', 'utf8')
// const arrAllWords = words.split('\r\n')
const Schema = mongoose.Schema;
const wordsSchema = new Schema({
    value: String,
})

const arrWords = [
    'Волк',
    'Заяц',
    'Лиса',
    'Снег',
    'Картошка',
    'Акула',
    'Молоко',
    'Кровь',
    'Мыло',
    'Носок',
    'Лес',
    'Волос',
    'Капуста',
    'Чеснок',
    'Дверь',
    'Потолок',
    'Окно',
    'Пол',
    'Стена',
    'Вилка',
    'Ложка',
    'Ручка',
    'Очки',
    'Рука',
    'Палец',
    'Пальма',
    'Облако',
    'Небо',
    'Космос',
    'Остров',
    'Лодка',
    'Лужа',
    'Лёд',
    'Кекс',
    'Арбуз',
    'Яхта',
    'Парус',
    'Ялта',
    'Письмо',
    'Открытка',
    'Перец',
    'Штаны',
    'Лето',
    'Полоска',
    'Кеды',
    'Шанс',
    'Успех',
    'Рюмка',
    'Водка',
    'Пиво',
]

const Words = mongoose.model("Words", wordsSchema);


// console.log(arrAllWords.length);


async function addWords() {
    for (let i = 0; i < arrWords.length; i++) {
        const words = new Words({ value: arrWords[i] })
        await words.save()
    }  
}
addWords()




module.exports = Words;