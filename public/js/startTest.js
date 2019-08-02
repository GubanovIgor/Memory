document.addEventListener('DOMContentLoaded', (event) => {
  document.addEventListener('click', async function(e) {
    if (e.target.classList.contains('start-test')) {
      e.preventDefault();

      const resp = await fetch('/sound', {
        method:'POST',
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
    }
  });
});