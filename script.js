const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const navLogo = document.querySelector('.nav-branding');
function toggleClassActive() {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
  navLogo.classList.toggle('active')
}
hamburger.addEventListener('click', toggleClassActive);
navLink.forEach(element => {
    element.addEventListener('click', toggleClassActive)
});
