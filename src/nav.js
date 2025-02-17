import { createProjectButton } from "./helperFunctions";

export function setUpNavBar() {
  const navBarMain = document.getElementById("nav");

  navBarMain.appendChild(createSortButtonContainer());
  navBarMain.appendChild(createNewProjectButton());
  navBarMain.appendChild(createProjectsTitle());


  createProjectButton();
}

function createSortButtonContainer() {
  const navBarContainer = document.createElement("div");
  navBarContainer.id = "navBarTop";
  return navBarContainer;
}

function createProjectsTitle() {
  const projectsTitle = document.createElement("div");
  projectsTitle.innerText = "Current Projects";
  projectsTitle.classList.add("sortBTNtitle");
  return projectsTitle;
}

function createNewProjectButton() {
  const createProjectBtn = document.createElement("button");
  createProjectBtn.id = "createNewProject";
  createProjectBtn.textContent = "Create a New Project";
  return createProjectBtn;
}
