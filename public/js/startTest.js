document.addEventListener('DOMContentLoaded', (event) => {
  document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('start-test')) {
      e.preventDefault();

      const resp = await fetch('/sound', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      });

      const name = await resp.json();

      const data = {
        userName: name,
      };

      const container = document.querySelector('.container');
      container.innerHTML = templates.playSounds(data);

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

      // function sound() {
      //   function plays(n) {
      //     if (n < linkArr.length) {
      //       setTimeout(() => {
      //         var audio = new Audio(linkArr[n]);
      //         audio.play();
      //         n++
      //         plays(n)
      //       }, 2000);
      //     } else {
      //       const container = document.querySelector('.container');
      //       container.innerHTML = templates.test();
      //     }

      //   }
      //   plays(0)
      // }
      // sound()


      for (let i = 0; i < linkArr.length; i++) {
        setTimeout(() => {
          var audio = new Audio(linkArr[i]);
          audio.play();
        }, 2000 * i)
      }
      setTimeout( async () => {
        const resp2 = await fetch('/showTest', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(),
        });
        const data = await resp2.json();

        // console.log(answers);
        const container = document.querySelector('.container');
        container.innerHTML = templates.test(data);
      }, 2000 * linkArr.length)
    }
  });
});