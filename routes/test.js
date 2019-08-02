const express = require('express');
const router = express.Router();

router.get('/getAnswers', function (req, res) {
    const answers = [
        {number: 1},
        {number: 2},
        {number: 3},
        {number: 4},
        {number: 5},
        // {number: 6},
        // {number: 7},
        // {number: 8},
        // {number: 9},
        // {number: 10},
        // {number: 11},
        // {number: 12},
        // {number: 13},
        // {number: 14},
        // {number: 15},
        // {number: 16},
        // {number: 17},
        // {number: 18},
        // {number: 19},
        // {number: 20},
    ]
    res.render('test', {
        answers: answers 
    })
})



module.exports = router