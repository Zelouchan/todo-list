const contentBox = document.getElementById("content");
import {
  addTask,
  createInputForm,
  createInputText,
  createCheckbox,
  createDate,
  createDropdown,
  submitButton,
  deleteButton,
  saveChangesButton,
} from "./helperFunctions.js";
import { getStoredProjects, saveProjects } from "./localStorage.js";
import { callProjectForm } from "./createForms";

export function createNewProjectForm() {
  contentBox.innerHTML = "";
  createInputForm("inputForm");
  createInputText("projectTitle", "Title: ", null, 15);
  createInputText("projectDescription", "Description: ", null, 50);
  createDate("projectDueDate", "Due Date: ");
  createDropdown("projectPriority", "Priority Level: ");
  createCheckbox("projectFinished", "Project Finished? ");
  submitButton();
  console.log("create project");
}

export function createNewTasktForm() {
  contentBox.innerHTML = "";
  createInputForm("inputForm");
  createInputText("taskTitle", "Task Title: ", "", 15);
  createInputText("taskDescription", "Task Notes: ", "", 2000);
  createDate("taskDueDate", "Due Date: ");
  createDropdown("taskPriority", "Priority Level: ");
  createCheckbox("taskFinished", "Task Finished? ");
  submitButton();
}

export function callProjectForm(index) {
  contentBox.innerHTML = "";
  const allProjects = getStoredProjects();
  const project = allProjects[index];

  if (!project) {
    console.error("Project not found.");
    return;
  }

  let projectTitle = project.title || "";
  let projectDescription = project.description || "";
  let projectDueDate = project.dueDate || "";
  let projectPriority = project.priority || "Medium";
  let projectFinished = project.finished || false;

  createInputForm("inputForm");
  createInputText("projectTitle", "Title: ", projectTitle, 15);
  createInputText(
    "projectDescription",
    "Description: ",
    projectDescription,
    50
  );
  createDate("projectDueDate", "Due Date: ", projectDueDate);
  createDropdown("projectPriority", "Priority Level: ", projectPriority);
  createCheckbox("projectFinished", "Project Finished? ", projectFinished);
  saveChangesButton(index);
  deleteButton(index);
  addTask();
}

export function callTaskForm(index) {
  contentBox.innerHTML = "";
  const allProjects = getStoredProjects();
  const project = allProjects[index];

  if (!project) {
    console.error("Project not found.");
    return;
  }

  let projectTitle = project.title || "";
  let projectDescription = project.description || "";
  let projectDueDate = project.dueDate || "";
  let projectPriority = project.priority || "Medium";
  let projectFinished = project.finished || false;

  createInputForm("inputForm");
  createInputText("taskTitle", "Title: ", projectTitle);
  createInputText("taskDescription", "Description: ", projectDescription);
  createDate("taskDueDate", "Due Date: ", projectDueDate);
  createDropdown("taskPriority", "Priority Level: ", projectPriority);
  createCheckbox("taskFinished", "Task Finished? ", projectFinished);
  saveChangesButton(index);
  deleteButton(index);
}

export function createProjectButton() {
  const navBarMain = document.getElementById("nav");
  let projectButtonsContainer = document.getElementById("buttonContainer");

  if (!projectButtonsContainer) {
    projectButtonsContainer = document.createElement("div");
    projectButtonsContainer.id = "buttonContainer";
    projectButtonsContainer.classList.add("projectButton");
    navBarMain.appendChild(projectButtonsContainer);
  } else {
    projectButtonsContainer.innerHTML = "";
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

    callProjectForm(index);
  }
}
