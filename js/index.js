const companyExperiences = [
  {
    companyName: "CoverPay",
    image: "https://placehold.co/200x120",
    startDate: "03/2022",
    endDate: "04/2024",
    isCurrentJob: false,
    details: "",
  },
  {
    companyName: "TOTVS Oeste",
    image: "https://placehold.co/200x120",
    startDate: "05/2024",
    endDate: "",
    isCurrentJob: true,
    details: "",
  },
];

function loadSettings() {
  setCurrentYear();
  setCompanyExperiences();

  const mobileMenuLinesContainer = document.getElementsByClassName(
    "mobileMenu__linesContainer",
  );

  setClickEvent(mobileMenuLinesContainer[0], function (event) {
    mobileMenuLinesContainer[0].classList.toggle("active");

    const navLinksContainer = document.getElementsByClassName(
      "nav__linksContainer",
    );

    if (!navLinksContainer.length) {
      return;
    }

    navLinksContainer[0].classList.toggle("active");
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

function setCompanyExperiences() {
  const experiencesCardsContainer = document.getElementsByClassName(
    "experiences__cardsContainer",
  );

  if (!experiencesCardsContainer.length) {
    console.warn(
      'f. setCompanyExperiences - Error when attempting to retrieve the element "experiences__cardsContainer"!',
    );

    return;
  }

  for (const companyExperience of companyExperiences) {
    experiencesCardsContainer[0].appendChild(
      createExperienceCard(companyExperience),
    );
  }
}

function createExperienceCard(experienceData) {
  const article = document.createElement("article");
  article.className = "experiences__card cursor-pointer";

  const containerCompanyImage = document.createElement("div");
  containerCompanyImage.className = "experiences__card-imageContainer";

  const companyImage = document.createElement("img");
  companyImage.src = experienceData.image;
  companyImage.alt = "logoEmpresa";
  companyImage.className = "experiences__card-image";
  companyImage.loading = "lazy";

  containerCompanyImage.appendChild(companyImage);

  const containerCardContent = document.createElement("div");
  containerCardContent.className = "experiences__card-content text-center";

  const title = document.createElement("h4");
  title.textContent = experienceData.companyName;

  containerCardContent.appendChild(title);

  const spanClickToSeeMoreDetails = document.createElement("span");
  spanClickToSeeMoreDetails.textContent = "Clique para ver mais detalhes";

  containerCardContent.appendChild(spanClickToSeeMoreDetails);

  article.appendChild(containerCompanyImage);
  article.appendChild(containerCardContent);

  return article;
}

function setClickEvent(element, callback) {
  if (!element) {
    return;
  }

  element.addEventListener("click", callback);
}
