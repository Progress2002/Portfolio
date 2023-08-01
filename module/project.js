/* eslint-disable */
import { projects } from './projectData.js';
import { workSection } from './variables.js';
import { modal } from './modal.js';

export const PROJECT_SECTION = () => {
  // Work section --------
  workSection.innerHTML += `
    <div id="work">
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
              <img class="img-desktop" src="${projects.one.featured_image.mobile}" alt="project-img">
          </div>
          <div class="body">
              <div class="body-content">
                  <h3>${projects.one.title}</h3>
                  <p>${projects.one.description.substring(0, 160) + "..."}</p>
                  <ul>
                  <li>${projects.one.technologies[0]}</li>
                  <li>${projects.one.technologies[1]}</li>
                  <li>${projects.one.technologies[2]}</li>
                  <li>${projects.one.technologies[3]}</li>
                  <li>${projects.one.technologies[4]}</li>
                  <li>${projects.one.technologies[5]}</li>
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
          <p>${projects.two.description1.substring(0, 90) + "..."}</p>
              <ul>
                  <li>${projects.two.technologies[0]}</li>
                  <li>${projects.two.technologies[1]}</li>
                  <li>${projects.two.technologies[2]}</li>
              </ul>
          </div>
          <div class="btn">
              <a href="#2" class="button popup-btn" id="two">See Project</a>
          </div>
      </li>
      <li class="project pr-3 bg-img btn-desktop">
          <div class="body-content">
              <h3>${projects.three.title}</h3>
              <p>${projects.three.description1.substring(0, 90) + "..."}</p>
              <ul>
                  <li>${projects.three.technologies[0]}</li>
                  <li>${projects.three.technologies[1]}</li>
                  <li>${projects.three.technologies[2]}</li>
              </ul>
          </div>
          <div class="btn">
              <a href="#3" class="button popup-btn" id="three">See Project</a>
          </div>
      </li>
      <li class="project pr-4 bg-img btn-desktop">
          <div class="body-content">
              <h3>${projects.four.title}</h3>
              <p>${projects.four.description1.substring(0, 90) + "..."}</p>
              <ul>
                  <li>${projects.four.technologies[0]}</li>
                  <li>${projects.four.technologies[1]}</li>
                  <li>${projects.four.technologies[2]}</li>
              </ul>
          </div>
          <div class="btn">
              <a href="#4" class="button popup-btn" id="four">See Project</a>
          </div>
      </li>
      <li class="project pr-5 bg-img btn-desktop">
          <div class="body-content">
              <h3>${projects.five.title}</h3>
              <p>${projects.five.description1.substring(0, 90) + "..."}</p>
              <ul>
                  <li>${projects.five.technologies[0]}</li>
                  <li>${projects.five.technologies[1]}</li>
                  <li>${projects.five.technologies[2]}</li>
              </ul>
          </div>
          <div class="btn">
              <a href="#5" class="button popup-btn" id="five">See Project</a>
          </div>
      </li>
      <li class="project pr-6 bg-img btn-desktop">
          <div class="body-content">
              <h3>${projects.six.title}</h3>
              <p>${projects.six.description1.substring(0, 90) + "..."}</p>
              <ul>
              <li>${projects.six.technologies[0]}</li>
              <li>${projects.six.technologies[1]}</li>
              <li>${projects.six.technologies[2]}</li>
              <li>${projects.six.technologies[3]}</li>
          </ul>
          </div>
          <div class="btn">
              <a href="#6" class="button popup-btn" id="six">See Project</a>
          </div>
      </li>
      <li class="project pr-7 bg-img btn-desktop">
          <div class="body-content">
              <h3>${projects.seven.title}</h3>
              <p>${projects.seven.description1.substring(0, 90) + "..."}</p>
              <ul>
                  <li>${projects.seven.technologies[0]}</li>
                  <li>${projects.seven.technologies[1]}</li>
                  <li>${projects.seven.technologies[2]}</li>
              </ul>
          </div>
          <div class="btn">
              <a href="#7" class="button popup-btn" id="seven" >See Project</a>
          </div>
      </li>
    </ul>
    </div>
  `;

  modal();
};
