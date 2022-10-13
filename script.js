const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const navLogo = document.querySelector('.nav-branding');
function toggleClassActive() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  navLogo.classList.toggle('active');
}
hamburger.addEventListener('click', toggleClassActive);
navLink.forEach((element) => {
  element.addEventListener('click', toggleClassActive);
});

const projects = {
  one: {
    title: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    featured_image: {
      mobile: './images/Img Placeholder.png',
      desktop: './images/Img Placeholder (5).png',
    },
    technologies: {
      one: 'css',
      two: 'html',
      three: 'bootstrap',
      four: 'Ruby',
    },
    links: {
      live: '#',
      source_code: '#',
    },
  },
  two: {
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description1: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featured_image: {
      mobile: './images/Img Placeholder (2).png',
      desktop: './images/Img Placeholder (2).png',
    },
    technologies: {
      one: 'html',
      two: 'bootstrap',
      three: 'Ruby',
    },
    links: {
      live: '#',
      source_code: '#',
    },
  },
  three: {
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description1: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featured_image: {
      mobile: './images/Img Placeholder (2).png',
      desktop: './images/Img Placeholder (2).png',
    },
    technologies: {
      one: 'html',
      two: 'bootstrap',
      three: 'Ruby',
    },
    links: {
      live: '#',
      source_code: '#',
    },
  },
  four: {
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description1: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featured_image: {
      mobile: './images/Img Placeholder (2).png',
      desktop: './images/Img Placeholder (2).png',
    },
    technologies: {
      one: 'html',
      two: 'bootstrap',
      three: 'Ruby',
    },
    links: {
      live: '#',
      source_code: '#',
    },
  },
  five: {
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description1: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featured_image: {
      mobile: './images/Img Placeholder (2).png',
      desktop: './images/Img Placeholder (2).png',
    },
    technologies: {
      one: 'html',
      two: 'bootstrap',
      three: 'Ruby',
    },
    links: {
      live: '#',
      source_code: '#',
    },
  },
  six: {
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description1: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featured_image: {
      mobile: './images/Img Placeholder (2).png',
      desktop: './images/Img Placeholder (2).png',
    },
    technologies: {
      one: 'html',
      two: 'bootstrap',
      three: 'Ruby',
    },
    links: {
      live: '#',
      source_code: '#',
    },
  },
  seven: {
    title: 'Profesional Art Printing Data',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description1: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    featured_image: {
      mobile: './images/Img Placeholder (2).png',
      desktop: './images/Img Placeholder (2).png',
    },
    technologies: {
      one: 'html',
      two: 'bootstrap',
      three: 'Ruby',
    },
    links: {
      live: '#',
      source_code: '#',
    },
  },
};

// Work section----------------
const workSection = document.querySelector('#work-section');
const work = document.createElement('div');
work.setAttribute('id', 'work');
workSection.appendChild(work);

work.innerHTML = `
            <div class="work-title">
                <div class="text">
                    <h2>My Recent Works</h2>
                </div>
                <div class="horizontal-line">
                    <hr>
                </div>
            </div>
            <ul id="work-content">
                <li class="project pr-1">
                    <div class="image">
                        <img class="img-mobile" src="${projects.one.featured_image.mobile}" alt="Project-img">
                        <img class="img-desktop" src="${projects.one.featured_image.desktop}" alt="project-img">
                    </div>
                    <div class="body">
                        <div class="body-content">
                            <h3>${projects.one.title}</h3>
                            <p>${projects.one.description}</p>
                            <ul>
                                <li>${projects.one.technologies.one}</li>
                                <li>${projects.one.technologies.two}</li>
                                <li>${projects.one.technologies.three}</li>
                                <li>${projects.one.technologies.four}</li>
                            </ul>
                        </div>
                        <div class="btn">
                            <a href="#1" class="button popup-btn" id="one">See Project</a>
                        </div>
                    </div>
                </li>
                <li class="project pr-2 bg-img btn-desktop">
                    <div class="body-content">
                        <h3>${projects.two.title}</h3>
                        <p>${projects.two.description1}</p>
                        <ul>
                            <li>${projects.two.technologies.one}</li>
                            <li>${projects.two.technologies.two}</li>
                            <li>${projects.two.technologies.three}</li>
                        </ul>
                    </div>
                    <div class="btn">
                        <a href="#2" class="button popup-btn" id="two">See Project</a>
                    </div>
                </li>
                <li class="project pr-3 bg-img btn-desktop">
                    <div class="body-content">
                        <h3>${projects.three.title}</h3>
                        <p>${projects.three.description1}</p>
                        <ul>
                            <li>${projects.three.technologies.one}</li>
                            <li>${projects.three.technologies.two}</li>
                            <li>${projects.three.technologies.three}</li>
                        </ul>
                    </div>
                    <div class="btn">
                        <a href="#3" class="button popup-btn" id="three">See Project</a>
                    </div>
                </li>
                <li class="project pr-4 bg-img btn-desktop">
                    <div class="body-content">
                        <h3>${projects.four.title}</h3>
                        <p>${projects.four.description1}</p>
                        <ul>
                            <li>${projects.four.technologies.one}</li>
                            <li>${projects.four.technologies.two}</li>
                            <li>${projects.four.technologies.three}</li>
                        </ul>
                    </div>
                    <div class="btn">
                        <a href="#4" class="button popup-btn" id="four">See Project</a>
                    </div>
                </li>
                <li class="project pr-5 bg-img btn-desktop">
                    <div class="body-content">
                        <h3>${projects.five.title}</h3>
                        <p>${projects.five.description1}</p>
                        <ul>
                            <li>${projects.five.technologies.one}</li>
                            <li>${projects.five.technologies.two}</li>
                            <li>${projects.five.technologies.three}</li>
                        </ul>
                    </div>
                    <div class="btn">
                        <a href="#5" class="button popup-btn" id="five">See Project</a>
                    </div>
                </li>
                <li class="project pr-6 bg-img btn-desktop">
                    <div class="body-content">
                        <h3>${projects.six.title}</h3>
                        <p>${projects.six.description1}</p>
                        <ul>
                            <li>${projects.six.technologies.one}</li>
                            <li>${projects.six.technologies.two}</li>
                            <li>${projects.six.technologies.three}</li>
                        </ul>
                    </div>
                    <div class="btn">
                        <a href="#6" class="button popup-btn" id="six">See Project</a>
                    </div>
                </li>
                <li class="project pr-7 bg-img btn-desktop">
                    <div class="body-content">
                        <h3>${projects.seven.title}</h3>
                        <p>${projects.seven.description1}</p>
                        <ul>
                            <li>${projects.seven.technologies.one}</li>
                            <li>${projects.seven.technologies.two}</li>
                            <li>${projects.seven.technologies.three}</li>
                        </ul>
                    </div>
                    <div class="btn">
                        <a href="#7" class="button popup-btn" id="seveen" >See Project</a>
                    </div>
                </li>
            </ul>`;

// POPUP SECTION------------------------
const popupBtn = document.querySelectorAll('.popup-btn');
const popup = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');

function openPopup() {
  popup.classList.add('active');
  overlay.classList.add('active');
}

const popupContainer = document.createElement('div');
popupContainer.classList.add('popup-container');
popup.appendChild(popupContainer);

popupContainer.innerHTML = `
            <div class="popup-header">
                <h2 class="popup-title">Multi Post Stories</h2>
                <button class="close-popup">&times;</button>
            </div>
            <ul class="technologies">
                <li class="list list-one"></li>
                <li class="list list-two"></li>
                <li class="list list-three"></li>
                <li class="list list-four"></li>
            </ul>
            <div class="popup-content">
                <div class="popup-image">
                    <img class="popup-img" src="./images/popup_mobile.png" alt="project img">
                </div>
                <div>
                    <p class="popup-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent
                    </p>
                    <div class="links">
                        <a href="#" class="popup-link live-link button">See Live <span><img src="./images/Icon.png" alt="see_live icon"></span></a>
                    <a href="#" class="popup-link source-link button">See Source <span><img src="./images/Vector.png" alt="Github_icon"></span></a>
                    </div>
                </div>
            </div>
`;
const closePopup = document.querySelector('.close-popup');

closePopup.addEventListener('click', () => {
  popup.classList.remove('active');
  overlay.classList.remove('active');
});

const popupTitle = document.querySelector('.popup-title');
const popupDescription = document.querySelector('.popup-description');
const popupListOne = document.querySelector('.list-one');
const popupListTwo = document.querySelector('.list-two');
const popupListThree = document.querySelector('.list-three');
const popupListFour = document.querySelector('.list-four');
const popupImg = document.querySelector('.popup-img');
const popupLiveLink = document.querySelector('.live-link');
const popupSourceLink = document.querySelector('.source-link');

popupBtn.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    openPopup();
    const screenWidth = window.innerWidth;
    const btnId = event.target.id;
    popupTitle.innerHTML = projects[btnId].title;
    popupDescription.innerHTML = projects[btnId].description;
    popupListOne.innerHTML = projects[btnId].technologies.one;
    popupListTwo.innerHTML = projects[btnId].technologies.two;
    popupListThree.innerHTML = projects[btnId].technologies.three;
    popupLiveLink.setAttribute('href', projects[btnId].links.live);
    popupSourceLink.setAttribute('href', projects[btnId].links.source_code);

    if (screenWidth > 765) {
      popupImg.setAttribute('src', projects[btnId].featured_image.desktop);
    } else {
      popupImg.setAttribute('src', projects[btnId].featured_image.mobile);
    }

    const forthTechnology = 'four' in projects[btnId].technologies;
    if (!forthTechnology) {
      popupListFour.style.display = 'none';
    } else {
      popupListFour.style.display = 'block';
      popupListFour.innerHTML = projects[btnId].technologies.four;
    }
  });
});

// FORM VALIDATION-------------------
const form = document.getElementById('getintouch');
const error = document.getElementById('error');
const email = document.getElementById('email');

function checkUppercase(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str.charAt(i) === str.charAt(i).toUpperCase() && str.charAt(i).match(/[a-z]/i)) {
      return true;
    }
  }
  return false;
}

email.addEventListener('click', () => {
  error.classList.remove('active');
  email.classList.remove('active');
});

form.addEventListener('submit', (event) => {
  const emailValue = email.value;
  if (checkUppercase(emailValue)) {
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

  localStorage.setItem('contact-form', JSON.stringify({ username, email, message }));
});

window.addEventListener('load', () => {
  const isDataExist = JSON.parse(localStorage.getItem('contact-form'));

  if (!isDataExist) return;

  contactUsernameField.value = isDataExist.username;
  contactEmailField.value = isDataExist.email;
  contactMessageField.value = isDataExist.message;
});