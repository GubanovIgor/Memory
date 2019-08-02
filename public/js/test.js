document.addEventListener('DOMContentLoaded', (event) => {
    document.addEventListener('click', async (e) => {
        if (e.target.classList.contains('send_answers')) {
            e.preventDefault()
            const inputAnswers = document.querySelectorAll(".answer_word")
            const formAnswers = []

            for (let i = 0; i < inputAnswers.length; i++) {
                formAnswers.push(inputAnswers[i].value)
            }

            const resp = await fetch('/answers', {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formAnswers)
            });
            //const answers = await resp.json()
        }
    });
});

