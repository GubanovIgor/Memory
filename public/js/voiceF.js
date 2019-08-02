document.addEventListener('DOMContentLoaded', (event) => {
    let resbutton = document.getElementById('start-voice')
    resbutton && resbutton.addEventListener('click', async (e) => {
        e.preventDefault();
        console.log('e.target');
        // нажатие кнопки на бек
        const reqback = await fetch(`/voice`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify()
        })

        const { linkArr } = await reqback.json()

        function sound() {
            function plays(n) {
                if (n < linkArr.length) {
                    setTimeout(() => {
                        var audio =  new Audio(linkArr[n]);
                        audio.play();
                        n++
                        plays(n)
                    }, 2000);
                }

            }
            plays(0)
        }
        sound()
    })
})