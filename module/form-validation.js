/* eslint-disable */
import { DATA_STORAGE } from './dataStorage.js';

// FORM VALIDATION-------------------
export const FORM_VALIDATION = () => {
  const form = document.getElementById('getintouch');
  const error = document.getElementById('error');
  const email = document.getElementById('email');

  email.addEventListener('click', () => {
    error.classList.remove('active');
    email.classList.remove('active');
  });

  form.addEventListener('submit', (event) => {
    const emailValue = email.value;
    const validEmail = emailValue.toLowerCase();
    if (emailValue !== validEmail) {
      event.preventDefault();
      error.innerHTML = 'please provide a valid email in format: email@email.com';
      error.classList.add('active');
      email.classList.add('active');
    } else {
      form.submit();
    }
  });

  DATA_STORAGE();
};
