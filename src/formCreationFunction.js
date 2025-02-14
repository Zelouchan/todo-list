import {
  submitButton,
  projectCreationForm,
  taskCreationForm,
} from "./createFormsDynamically";
const contentBox = document.getElementById("content");

export function createProjectForm() {
  contentBox.innerHTML = "";
  projectCreationForm();
  submitButton();
}

export function createTaskForm() {
  contentBox.innerHTML = "";
  taskCreationForm();
  submitButton();
}
