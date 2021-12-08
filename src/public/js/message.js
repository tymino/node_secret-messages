const passwordBlock = document.querySelector('.js-password-page');
const password = document.querySelector('.js-password-page__input');
const submitBtn = document.querySelector('.js-password-page__submit');

const messageBlock = document.querySelector('.js-message-page');
const messageContent = document.querySelector('.js-message-page__text');

const SITE_URL = 'http://localhost:5000/';

const validatePassword = (status) => {
  if (password.value.length < 1) {
    password.classList.add('error');
    return true;
  }

  if (status) {
    password.classList.add('error');
    return true;
  }

  password.classList.remove('error');
  return false;
};

const switchForm = (text) => {
  passwordBlock.style.display = 'none';

  messageContent.textContent = `${text}`;
  messageBlock.style.display = 'flex';
};

const clearInputs = () => {
  password.value = '';
};

passwordBlock.addEventListener('submit', async (e) => {
  e.preventDefault();

  const isValidPassword = validatePassword();
  if (isValidPassword) return;

  const bodyForm = {
    password: password.value,
  };

  const response = await fetch(window.location.href, {
    method: 'POST',
    body: JSON.stringify(bodyForm),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const json = await response.json();

  if (json.message === null) {
    validatePassword(true);
    clearInputs();
    return;
  }
  
  switchForm(json.message);
  clearInputs();
});