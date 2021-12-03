const form = document.querySelector('#form');
const textarea = document.querySelector('#textarea');

form.addEventListener('submit', async(e) => {
  // e.preventDefault();

  const response = await fetch('http://localhost:5000/', {
    method: 'POST',
    body: JSON.stringify({ name: textarea.value}),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  // const json = await response.json();

  // console.log(json);
});
