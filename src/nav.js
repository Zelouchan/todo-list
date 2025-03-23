import { createProjectButton } from "./helperFunctions";
import { saveProjects } from "./localStorage";
import { Project } from "./userInput";


export function setUpNavBar() {
  const navBarMain = document.getElementById("nav");

  navBarMain.appendChild(createSortButtonContainer());
  navBarMain.appendChild(createNewProjectButton());
  navBarMain.appendChild(createProjectsTitle());

  let allProjects = JSON.parse(localStorage.getItem("projects")) || [];
  console.log(allProjects);

  if (allProjects.length === 0) {
    const defaultProject = new Project(
      "Default Project",
      "This is a default project description.",
      new Date().toISOString().split("T")[0], // Today's date
      "Low",
      false,
      []
    );

    allProjects.push(defaultProject);
    saveProjects(allProjects);
  }

  createProjectButton();
}

function createSortButtonContainer() {
  const navBarContainer = document.createElement("div");
  navBarContainer.id = "navBarTop";
  return navBarContainer;
}

// creates current title text
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
