const contentBox = document.getElementById("content");
import {createInputForm, createInputText, createCheckbox, createDate, createDropdown, submitButton, deleteButton, saveChangesButton} from "./helperFunctions.js"
import { getStoredProjects } from "./localStorage";

export function createNewProjectForm() {
  contentBox.innerHTML = "";
  createInputForm("inputForm");
  createInputText("projectTitle", "Title: ");
  createInputText("projectDescription", "Description: ");
  createDate("projectDueDate", "Due Date: ");
  createDropdown("projectPriority", "Priority Level: ")
  createCheckbox("projectFinished","Project Finished? ")
  submitButton();
  deleteButton();
  console.log("create project");
}

export function createNewTasktForm() {
  contentBox.innerHTML = "";
  createInputForm("inputForm");
  createInputText("taskTitle", "Title: ", "");
  createInputText("taskDescription", "Description: ", "");
  createDate("taskDueDate", "Due Date: ");
  createDropdown("taskPriority", "Priority Level: ")
  createCheckbox("taskFinished","Task Finished? ")
  submitButton();
  deleteButton();
}

export function callProjectForm(index) {
  contentBox.innerHTML = "";
  const allProjects = getStoredProjects();
  const project = allProjects[index];

  if (!project) {
    console.error("Project not found.");
    return;
  }

  let projectTitle = project.title || '';
  let projectDescription = project.description || '';
  let projectDueDate = project.dueDate || '';
  let projectPriority = project.priority || 'Medium';
  let projectFinished = project.finished || false; 

  createInputForm("inputForm");
  createInputText("projectTitle", "Title: ", projectTitle);
  createInputText("projectDescription", "Description: ", projectDescription);
  createDate("projectDueDate", "Due Date: ", projectDueDate);
  createDropdown("projectPriority", "Priority Level: ", projectPriority);
  createCheckbox("projectFinished", "Project Finished? ", projectFinished);
  saveChangesButton(index);
  deleteButton(index);
}

export function callProjectForm(index) {
  contentBox.innerHTML = "";
  // const allProjects = getStoredProjects();
  // const project = allProjects[index];

  if (!project) {
    console.error("Project not found.");
    return;
  }

  // let projectTitle = project.title || '';
  // let projectDescription = project.description || '';
  // let projectDueDate = project.dueDate || '';
  // let projectPriority = project.priority || 'Medium';
  // let projectFinished = project.finished || false; 

  createInputForm("inputForm");
  createInputText("taskTitle", "Title: ", projectTitle);
  createInputText("taskDescription", "Description: ", projectDescription);
  createDate("taskDueDate", "Due Date: ", projectDueDate);
  createDropdown("taskPriority", "Priority Level: ", projectPriority)
  createCheckbox("taskFinished","Task Finished? ", projectFinished)
  saveChangesButton(index);
  deleteButton(index);
}
