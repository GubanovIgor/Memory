//Add users to dataBase
async function createUsers() {
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
}

//Add words collection to dataBase
async function createWords() {
    let words1 = new Words({ value: [''] })
    await words1.save()
}

