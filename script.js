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
      mobile: './images/popup_mobile.png',
      desktop: './images/popup_desktop.png',
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
      mobile: './images/popup_mobile.png',
      desktop: './images/popup_desktop.png',
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
      mobile: './images/popup_mobile.png',
      desktop: './images/popup_desktop.png',
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
      mobile: './images/popup_mobile.png',
      desktop: './images/popup_desktop.png',
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
      mobile: './images/popup_mobile.png',
      desktop: './images/popup_desktop.png',
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
      mobile: './images/popup_mobile.png',
      desktop: './images/popup_desktop.png',
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
      mobile: './images/popup_mobile.png',
      desktop: './images/popup_desktop.png',
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
                        <img class="img-mobile" src="images/Img Placeholder.png" alt="Project-img">
                        <img class="img-desktop" src="images/Img Placeholder (5).png" alt="">
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
                            <li>${projects.six.technologies.two}bootstrap</li>
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


            const popupBtn = document.querySelectorAll('.popup-btn');
const popup = document.querySelector('#modal');
const overlay = document.querySelector('#overlay');
let arr = [];

function openPopup() {
  popup.classList.add('active')
  overlay.classList.add('active')
}

let array = []

popupBtn.forEach(btn => {
  btn.addEventListener('click', (event) => {
    openPopup();
    arr.push(event.target.id);
    let index = (arr.length) -1;
    var id = arr[index];
  })
})
