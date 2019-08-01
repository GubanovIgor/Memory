document.addEventListener('DOMContentLoaded', (event) => {
  document.addEventListener('click', async function(e) {
    if (e.target.classList.contains('auth')) {
      e.preventDefault();
      const name = document.getElementById('name');
      const surname = document.getElementById('surname');
      const email = document.getElementById('email');

      const formData = {
        name: name.value,
        surname: surname.value,
        email: email.value,
      }

      const resp = await fetch('/addUser', {
        method:'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    }
  });
});
