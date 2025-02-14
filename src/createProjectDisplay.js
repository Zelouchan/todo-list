import { getStoredProjects } from "./localStorage";
import { callProjectForm } from "./createFormsDynamically";

export function createProjectButton() {
  const navBarMain = document.getElementById("nav");
  let projectButtonsContainer = document.getElementById("buttonContainer");

  if (!projectButtonsContainer) {
    projectButtonsContainer = document.createElement("div");
    projectButtonsContainer.id = "buttonContainer";
    projectButtonsContainer.classList.add("projectButton");
    navBarMain.appendChild(projectButtonsContainer);
  } else {
    projectButtonsContainer.innerHTML = ''; 
  }

  const allProjects = getStoredProjects();

  allProjects.forEach((project, index) => {
    const projectButton = document.createElement("button");
    projectButton.id = `project-${index}`;
    projectButton.innerText = `${project.title}`;

    projectButtonsContainer.appendChild(projectButton);

    projectButton.addEventListener("click", () => {
      displayProjectDetails(index);
    });
  });

  console.log(allProjects);
}

export function displayProjectDetails(index) {
  const allProjects = getStoredProjects(); 
  const project = allProjects[index];

  if (!project) {
    alert("Project not found");
    return;
  } else {
    const contentBox = document.getElementById("content");
contentBox.innerHTML = "";
    // create a function that calls all the project information
    callProjectForm(index);
  }

  console.log("Displaying details for:", project.title);
}
