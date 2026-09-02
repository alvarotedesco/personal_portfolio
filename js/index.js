import { initializeMenu } from "./components/menu.js";
import { renderExperiences } from "./components/experiences.js";

function initialize() {
  setCurrentYear();
  initializeMenu();
  renderExperiences();
}

function setCurrentYear() {
  const currentYear = document.getElementById("currentYear");

  if (!currentYear) {
    return;
  }

  currentYear.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", initialize);
