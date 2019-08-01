document.addEventListener('DOMContentLoaded',  (event) => {
    let resForm = document.getElementById('srchForm')
    resForm && resForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        // console.log (e.target.emailsrch.value);

        const formData = {
            email: e.target.emailsrch.value,
        }

        const resp = await fetch(`/stat`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(formData)
        })

        const data = await resp.json()
        console.log(data)
    })
})