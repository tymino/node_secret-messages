const formBlock = document.querySelector('.js-home-page');
const message = document.querySelector('.js-home-page__message');
const messageLimit = document.querySelector('.js-home-page__message-limit');
const password = document.querySelector('.js-home-page__password');
const submitBtn = document.querySelector('.js-home-page__submit');

const linkBlock = document.querySelector('.js-link-page');
const link = document.querySelector('.js-link-page__link');
const copy = document.querySelector('.js-link-page__copy');

const MESSAGE_MAX_LENGTH = 500;

formBlock.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (message.value.length < 1) return;
  if (password.value.length < 4 || password.value.length > 8) return;

  const secretMessage = {
    message: message.value,
    password: password.value,
  };

  const response = await fetch('http://localhost:5000/', {
    method: 'POST',
    body: JSON.stringify(secretMessage),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const json = await response.json();

  console.log(json);
});

message.addEventListener('input', (e) => {
  messageLimit.textContent = `${e.target.value.length}/${MESSAGE_MAX_LENGTH}`;

  if (e.target.value.length >= MESSAGE_MAX_LENGTH) {
    e.target.value = e.target.value.substring(0, MESSAGE_MAX_LENGTH);
    messageLimit.textContent = `${e.target.value.length}/${MESSAGE_MAX_LENGTH}`;
  }
});
