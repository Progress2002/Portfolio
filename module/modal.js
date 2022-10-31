import { projects } from "./projectData.js";


export const modal = () => {
  // POPUP SECTION------------------------
  const popupBtn = document.querySelectorAll(".popup-btn");
  const popup = document.querySelector("#modal");
  const overlay = document.querySelector("#overlay");

  const openPopup = () => {
    popup.classList.add("active");
    overlay.classList.add("active");
  }

  popup.innerHTML += `
    <div class="popup-container">
              <div class="popup-header">
                  <h2 class="popup-title"></h2>
                  <button class="close-popup">&times;</button>
              </div>
              <ul class="technologies"></ul>
              <div class="popup-content">
                  <div class="popup-image">
                      <img class="popup-img" src="#" alt="project img">
                  </div>
                  <div>
                      <p class="popup-description"></p>
                      <div class="links">
                          <a href="#" class="popup-link live-link button">See Live <span><img src="./images/Icon.png" alt="see_live icon"></span></a>
                      <a href="#" class="popup-link source-link button">See Source <span><img src="./images/Vector.png" alt="Github_icon"></span></a>
                      </div>
                  </div>
              </div>
    </div>
  `;
  const closePopupBtn = document.querySelector(".close-popup");
  const technologies = document.querySelector(".technologies");

  const closePopup = () => {
    popup.classList.remove("active");
    overlay.classList.remove("active");
  }

  closePopupBtn.addEventListener("click", closePopup);
  overlay.addEventListener('click', closePopup);

  

  const popupTitle = document.querySelector(".popup-title");
  const popupDescription = document.querySelector(".popup-description");
  const popupImg = document.querySelector(".popup-img");
  const popupLiveLink = document.querySelector(".live-link");
  const popupSourceLink = document.querySelector(".source-link");

  popupBtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      openPopup();
      const btnId = event.target.id;
      const technologyArr = projects[btnId].technologies;
      const screenWidth = window.innerWidth;

      popupTitle.innerHTML = projects[btnId].title;
      popupDescription.innerHTML = projects[btnId].description;
      popupLiveLink.setAttribute("href", projects[btnId].links.live);
      popupSourceLink.setAttribute("href", projects[btnId].links.source_code);

      let techLength = technologies.innerHTML.length;
      technologyArr.forEach((technology) => {
        technologies.innerHTML += `
        <li class="list ">${technology}</li>
        `;
      });

      if (techLength !== 0) {
        technologies.innerHTML = "";
        technologyArr.forEach((technology) => {
          technologies.innerHTML += `
          <li class="list ">${technology}</li>
          `;
        });
      }

      if (screenWidth > 765) {
        popupImg.setAttribute("src", projects[btnId].featured_image.desktop);
      } else {
        popupImg.setAttribute("src", projects[btnId].featured_image.mobile);
      }
    });
  });
}