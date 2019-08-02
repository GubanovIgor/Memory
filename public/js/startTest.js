document.addEventListener('DOMContentLoaded', (event) => {
  document.addEventListener('click', async function(e) {
    if (e.target.classList.contains('start-test')) {
      e.preventDefault();
    }
  });
});