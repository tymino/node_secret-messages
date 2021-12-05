const form = document.querySelector('.js-home-page');
const message = document.querySelector('.js-home-page__message');
const messageLimit = document.querySelector('.js-home-page__message-limit');
const password = document.querySelector('.js-home-page__password');
const submitBtn = document.querySelector('.js-home-page__submit');

form.addEventListener('submit', async (e) => { 
  e.preventDefault();

  const response = await fetch('http://localhost:5000/', {
    method: 'POST',
    body: JSON.stringify({ name: message.value }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const json = await response.json();

  console.log(json);
  
});
