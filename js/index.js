const companyExperiences = [
  {
    companyName: "CoverPay",
    image: "https://placehold.co/200x111",
    startDate: "03/2022",
    endDate: "04/2024",
    isCurrentJob: false,
    details: "",
  },
  {
    companyName: "TOTVS Oeste",
    image: "https://placehold.co/200x111",
    startDate: "05/2024",
    endDate: "",
    isCurrentJob: true,
    details: "",
  },
];

function loadSettings() {
  setCurrentYear();
  setHeroBannerImage();
  setCompanyExperiences();

  const mobileMenuContainer = document.querySelector(".mobileMenuContainer");

  setClickEvent(mobileMenuContainer, function () {
    mobileMenuContainer.classList.toggle("active");

    const navList = document.querySelector(".navList");

    if (!navList) {
      return;
    }

    navList.classList.toggle("active");
  });
}

function setCurrentYear() {
  const currentYearContainer = document.getElementById("currentYearContainer");

  if (!currentYearContainer) {
    console.warn(
      'f. setCurrentYear - Error when attempting to retrieve the element "currentYearContainer"!',
    );

    return;
  }

  const currentDate = new Date();

  currentYearContainer.innerText = currentDate.toLocaleDateString("pt-BR", {
    year: "numeric",
  });
}

function setHeroBannerImage() {
  const heroBannerImage = document.getElementById("heroBannerImage");

  if (!heroBannerImage) {
    console.warn(
      'f. setHeroBannerImage - Error when attempting to retrieve the element "heroBannerImage"!',
    );

    return;
  }

  heroBannerImage.innerHTML = `<img src="https://placehold.co/250x300" alt="perfilImageTest" style="max-width: 100%;" loading="lazy">`;
}

function setCompanyExperiences() {
  const carouselCompanyExperienceItemsContainer = document.getElementById(
    "carouselCompanyExperienceItemsContainer",
  );

  if (!carouselCompanyExperienceItemsContainer) {
    console.warn(
      'f. setCompanyExperiences - Error when attempting to retrieve the element "carouselCompanyExperienceItemsContainer"!',
    );

    return;
  }

  const carouselCompanyExperienceItems = [];

  for (const companyExperience of companyExperiences) {
    carouselCompanyExperienceItems.push(`<div class="carouselCompanyExperienceItem">
      <div class="carouselCompanyExperienceItemImage">
        <img src="${companyExperience.image}" alt="perfilImageTest" style="max-width: 100%;" loading="lazy">
      </div>

      <div class="carouselCompanyExperienceItemDetails">
        <h4 class="carouselCompanyExperienceItemDetailsTitle">${companyExperience.companyName}</h4>

        <span class="carouselCompanyExperienceItemDetailsStart">Iniciado em ${companyExperience.startDate}</span>

        <br>

        <span class="carouselCompanyExperienceItemDetailsEnd">${companyExperience.isCurrentJob ? "Cargo Atual" : `Finalizado em ${companyExperience.endDate}`}</span>

        <br>

        <button class="carouselCompanyExperienceItemDetailsButton" type="button">Mais detalhes</button>
      </div>
    </div>`);
  }

  carouselCompanyExperienceItemsContainer.innerHTML =
    carouselCompanyExperienceItems.join("");
}

function setClickEvent(element, callback) {
  if (!element) {
    return;
  }

  element.addEventListener("click", callback);
}
