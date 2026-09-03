import { initializeMenu } from "./components/menu.js";
import { renderExperiences } from "./components/experiences.js";

function initialize() {
  setCurrentYear();
  initializeMenu();
  renderExperiences();
}

function setCurrentYear() {
  const currentYear = document.getElementById("current-year");

  if (!currentYear) {
    return;
  }

  currentYear.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", initialize);
