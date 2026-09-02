const companyExperiences = [
  {
    companyName: "CoverPay",
    image: "https://placehold.co/200x120",
    startDate: "03/2022",
    endDate: "04/2024",
    isCurrentJob: false,
  },
  {
    companyName: "TOTVS Oeste",
    image: "https://placehold.co/200x120",
    startDate: "05/2024",
    endDate: "",
    isCurrentJob: true,
  },
];

export function renderExperiences() {
  const experiencesList = document.querySelector(
    ".experiences__cardsContainer",
  );

  if (!experiencesList) {
    return;
  }

  for (const experience of companyExperiences) {
    experiencesList.appendChild(createExperienceCard(experience));
  }
}

function createExperienceCard(experience) {
  const article = document.createElement("article");
  article.classList.add("experiences__card", "cursor-pointer");

  const imageWrapper = createCompanyImage(experience);

  const experiencesCardContainer = document.createElement("div");
  experiencesCardContainer.classList.add("experiences__card-content");

  const title = document.createElement("h3");
  title.classList.add("experiences__card-content", "text-center");
  title.textContent = experience.companyName;

  const period = document.createElement("p");
  period.textContent = createExperiencePeriod(experience);

  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add(
    "flex",
    "align-items-center",
    "justify-content-center",
  );
  const detailsButton = document.createElement("button");
  detailsButton.type = "button";
  detailsButton.textContent = "Mais detalhes";
  buttonContainer.appendChild(detailsButton);

  experiencesCardContainer.append(title, period, buttonContainer);
  article.append(imageWrapper, experiencesCardContainer);

  return article;
}

function createCompanyImage(experience) {
  const experienceCardImageContainer = document.createElement("div");
  experienceCardImageContainer.classList.add(
    "experiences__card-imageContainer",
  );

  const image = document.createElement("img");
  image.classList.add("experiences__card-image");
  image.src = experience.image;
  image.alt = `Logo da empresa ${experience.companyName}`;
  image.loading = "lazy";

  experienceCardImageContainer.appendChild(image);

  return experienceCardImageContainer;
}

function createExperiencePeriod(experience) {
  if (experience.isCurrentJob) {
    return `De ${experience.startDate} — Cargo atual`;
  }

  return `De ${experience.startDate} até ${experience.endDate}`;
}
