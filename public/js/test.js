document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('send_answers')) {
            e.preventDefault()
            const inputAnswers = document.querySelectorAll(".answer_word")
            const answers = []
            for (let i = 0; i < inputAnswers.length; i++) {
                answers.push(inputAnswers[i].value)
            }
            console.log(answers)
            
        }
    })
})

