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
  const experienceList = document.querySelector(".experience-list");

  if (!experienceList) {
    return;
  }

  for (const experience of companyExperiences) {
    experienceList.appendChild(createExperienceCard(experience));
  }
}

function createExperienceCard(experience) {
  const article = document.createElement("article");
  article.classList.add("experience-card", "cursor-pointer");

  const imageWrapper = createCompanyImage(experience);

  const experiencesCardContainer = document.createElement("div");
  experiencesCardContainer.classList.add("experience-card-content");

  const title = document.createElement("h3");
  title.classList.add("experience-card-content", "text-center");
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
  const image = document.createElement("img");

  image.classList.add("experience-card-image");
  image.src = experience.image;
  image.alt = `Logo da empresa ${experience.companyName}`;
  image.loading = "lazy";

  return image;
}

function createExperiencePeriod(experience) {
  if (experience.isCurrentJob) {
    return `De ${experience.startDate} — Cargo atual`;
  }

  return `De ${experience.startDate} até ${experience.endDate}`;
}
