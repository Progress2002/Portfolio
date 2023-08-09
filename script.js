import {
  hamburger, navLink, navLogo, navMenu,
} from './module/variables.js';
import { PROJECT_SECTION } from './module/project.js';
import { FORM_VALIDATION } from './module/form-validation.js';

// display the work section created dynamically
PROJECT_SECTION();

// validate form inpute and store data in local storage
FORM_VALIDATION();

// Mobile nav menu functionality
const toggleClassActive = () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  navLogo.classList.toggle('active');
};

hamburger.addEventListener('click', toggleClassActive);
navLink.forEach((element) => {
  element.addEventListener('click', toggleClassActive)
});
