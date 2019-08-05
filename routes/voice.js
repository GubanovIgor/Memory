const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const { Test } = require('../models/Test')

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
        let voice = await fetch(encodeURI(`http://api.voicerss.org/?key=c1db2160e5c64089bb8f5cb5bce4dcdf&hl=ru-ru&src=${words[i]}`));
        let link = voice.url
        linkArr.push(link)
        console.log(linkArr)
    }
    res.json({linkArr})
})

module.exports = router;
