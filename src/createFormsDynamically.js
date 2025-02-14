const contentBox = document.getElementById("content");
import {createInputForm, createInputText, createCheckbox, createDate, createDropdown, submitButton, deleteButton} from "./helperFunctions.js"

export function createNewProjectForm() {
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
  createInputForm("inputForm");
  createInputText("taskTitle", "Title: ");
  createInputText("taskDescription", "Description: ");
  createDate("taskDueDate", "Due Date: ");
  createDropdown("taskPriority", "Priority Level: ")
  createCheckbox("taskFinished","Task Finished? ")
  submitButton();
  deleteButton();
}

