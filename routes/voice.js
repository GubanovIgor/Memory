const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const Test = require('../models/Test')

router.get('/testV', function (req, res) {
    res.render('voice');
});

router.post('/voice', async function (req, res, next) {
    const test = await Test.findOne({email: req.session.email});
    console.log(req.session);
    console.log(test)
    let words = test.words;
    let linkArr = [];
    for (let i = 0; i < words.length; i++) {
        console.log("!!!!!!!!!", words[i])
        let voice = await fetch(encodeURI(`http://api.voicerss.org/?key=135a0cff008e4585a5da30ca99dc1283&hl=ru-ru&src=${words[i]}`));
        let link = voice.url
        linkArr.push(link)
        console.log(linkArr)
    }
    res.json({linkArr})
    // console.log(voice)
    // let link = voice.url
    // console.log(link)
    // res.json({
    //     link:link
    // })



    // const data = await voice
})

module.exports = router;

// let words = ['Андрей', 'Анита', 'Оля', 'Игорь'];
//     for (let i = 0; i < words.length; i ++){
//         const voice = await fetch(`http://api.voicerss.org/?key=d66071f9fb3745cab47ed8eb3fd2fa33&hl=en-us&src=${words[i]});