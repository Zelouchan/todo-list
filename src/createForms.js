// ties functions together to create the forms
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
  editProjectButton,
} from "./helperFunctions.js";
import { getStoredProjects, saveProjects } from "./localStorage.js";

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

export function displayProjectDetails(index) {
  const allProjects = getStoredProjects();
  const project = allProjects[index];

  if (!project) {
    alert("Project not found");
    return;
  } else {
    const contentBox = document.getElementById("content");
    contentBox.innerHTML = "";
    createInputForm();
    const formContainer = document.querySelector("form");
    formContainer.innerText = `${project.title}`;
    editProjectButton();

    const editProjectBut  = document.getElementById("editProject");

    editProjectBut.addEventListener("click", (event) => {
      event.preventDefault();
      callProjectForm(index);
    });
  }
}
