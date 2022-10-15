// FORM VALIDATION-------------------
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

const contactForm = document.getElementById('form');
const contactEmailField = document.getElementById('email');
const contactUsernameField = document.getElementById('name');
const contactMessageField = document.getElementById('textarea');

contactForm.addEventListener('input', () => {
  const username = contactUsernameField.value;
  const email = contactEmailField.value;
  const message = contactMessageField.value;

  localStorage.setItem(
    'contact-form',
    JSON.stringify({ username, email, message }),
  );
});

window.addEventListener('load', () => {
  const isDataExist = JSON.parse(localStorage.getItem('contact-form'));

  if (!isDataExist) return;

  contactUsernameField.value = isDataExist.username;
  contactEmailField.value = isDataExist.email;
  contactMessageField.value = isDataExist.message;
});
