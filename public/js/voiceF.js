document.addEventListener('DOMContentLoaded', (event) => {
    let resbutton = document.getElementById('start')
    resbutton && resbutton.addEventListener('click', async (e) => {
        e.preventDefault();
        console.log(e)

            ;

        // нажатие кнопки на бек
        const reqback = await fetch(`/voice`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify()
        })

        const { linkArr } = await reqback.json()
        console.log(linkArr)


        // let a = 1600;
        // let count = 0;

        // function plays() {
        //     console.log(audio)
        //     audio.play();
        //     while(count < linkArr.length - 1)
        //     sound(count)
        //     console.log(count);
        // }



        // function sound(count){
        //     for (let i = 0; i < linkArr.length; i++) {
        //         var audio =  new Audio(linkArr[i]);
        //         setTimeout(plays, a)
        //         a = a + 1600;
        //         count++;
        //     }
        // }


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


        // function play(url) {
        //     var audio = new Audio(url);
        //     audio.play();
        // }

        // for (let i = 0; i < linkArr.length; i++) {
        //     setTimeout(function () {
        //         play(linkArr[i])
        //     },  2000);
        // }








    })
})