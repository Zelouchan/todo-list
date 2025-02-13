import { getStoredProjects } from "./localStorage";


function createProjectButton () {
const allProjects = getStoredProjects();
const navBarMain = document.getElementById("nav");

const projectButtonsContainer = document.createElement("div");
projectButtonsContainer.id = "buttonContainer";
projectButtonsContainer.classList.add("projectButton");
navBarMain.appendChild(projectButtonsContainer);



}