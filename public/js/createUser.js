document.addEventListener('DOMContentLoaded', (event) => {
  document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('auth')) {
      e.preventDefault();
      const name = document.getElementById('name');
      const surname = document.getElementById('surname');
      const email = document.getElementById('email');

      const formData = {
        firstName: name.value,
        secondName: surname.value,
        email: email.value,
      }

      const resp = await fetch('/addUser', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await resp.json();
      const test = { // Переименовать test
        userName: data,
      }

      const container = document.querySelector('.container');
      container.innerHTML = templates.instructions(test);

      const resp2 = await fetch('/createTest', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      });
    }
  });
});
