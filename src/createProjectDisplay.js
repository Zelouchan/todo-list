import { getStoredProjects } from "./localStorage";
const allProjects = getStoredProjects();

export function createProjectButton() {
  const navBarMain = document.getElementById("nav");

  const projectButtonsContainer = document.createElement("div");
  projectButtonsContainer.id = "buttonContainer";
  projectButtonsContainer.classList.add("projectButton");
  navBarMain.appendChild(projectButtonsContainer);

  allProjects.forEach((project, index) => {
    const projectButton = document.createElement("button");
    projectButton.id = `project-${index}`;
    projectButton.innerText = `${project.title}`;

    projectButtonsContainer.appendChild(projectButton);

    projectButton.addEventListener("click", () => {
      displayProjectDetails(index);
    });
  });
}

export function displayProjectDetails(index) {
  const project = allProjects[index];

  if (!project) {
    alert("Project not found");
    return;
  }

else {
    console.log("test");
  }
}
