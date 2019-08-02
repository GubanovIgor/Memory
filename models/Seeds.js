const { User } = require('./User');
const  Test  = require('./Test')
const Words = require('./Words')

//Add users to dataBase
async function seeds() {
    let user1 = new User({ firstname: 'Andrey', secondname: 'Krolikov', email: 'krolikovandrey@gmail.com' })
    await user1.save()

    let user2 = new User({ firstname: 'Vasia', secondname: 'Pupkin', email: 'vasiapupkin@gmail.com' })
    await user2.save()

    let user3 = new User({ firstname: 'Kolia', secondname: 'Zaycev', email: 'zycev@yandex.ru' })
    await user3.save()

    let user4 = new User({ firstname: 'Gamora', secondname: 'Galinova', email: 'galina@gmail.com' })
    await user4.save()


    let admin = new User({ firstname: 'admin', secondname: 'admin', email: 'admin' })
    await admin.save()

    let words1 = new Words({ words: ['Слово'] })
    await words1.save()

    let test1 = new Test({ user: user1._id, countRight:10, positionRight:9,total:'Ну такое!' })
    await test1.save()
}

// seeds();