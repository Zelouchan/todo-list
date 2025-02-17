const contentBox = document.getElementById("content");

import {
  takeProjectFormInput,
  changeProjectForm,
  takeTaskFormInput,
} from "./userInput";
import { saveProjects, getStoredProjects } from "./localStorage";
import { createNewTaskForm, displayProjectDetails } from "./createForms";

//creates the container element for styling purposes
export function createInputForm(klas) {
  const inputForm = document.createElement("form");
  inputForm.classList.add(klas);
  contentBox.appendChild(inputForm);
}

// creates a text input field
export function createInputText(aiDee, textInput, projectValue, length) {
  const formContainer = document.querySelector("form");
  const inputField = document.createElement("input");
  inputField.maxLength = length;
  inputField.type = "text";
  inputField.id = aiDee;
  inputField.value = projectValue || "";

  const label = document.createElement("label");
  label.setAttribute("for", aiDee);
  label.textContent = textInput;

  formContainer.appendChild(label);
  formContainer.appendChild(inputField);
}

//creates a date input field
export function createDate(aiDee, textInput, projectValue) {
  const formContainer = document.querySelector("form");
  const inputField = document.createElement("input");
  inputField.type = "date";
  inputField.id = aiDee;
  inputField.value = projectValue || "";

  const label = document.createElement("label");
  label.setAttribute("for", aiDee);
  label.textContent = textInput;

  formContainer.appendChild(label);
  formContainer.appendChild(inputField);
}

// creates a checkbox
export function createCheckbox(aiDee, textInput, projectValue) {
  const formContainer = document.querySelector("form");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = aiDee;
  checkbox.checked = projectValue || false;

  const label = document.createElement("label");
  label.setAttribute("for", aiDee);
  label.textContent = textInput;

  formContainer.appendChild(label);
  formContainer.appendChild(checkbox);
}

// creates the priority drop down menu
export function createDropdown(aiDee, textInput, projectValue) {
  const formContainer = document.querySelector("form");
  const dropdown = document.createElement("select");
  dropdown.id = aiDee;
  dropdown.value = projectValue;

  const options = ["High", "Mid", "Low"];
  options.forEach((optionText) => {
    const option = document.createElement("option");
    option.value = optionText;
    option.textContent = optionText;
    dropdown.appendChild(option);
  });

  const label = document.createElement("label");
  label.setAttribute("for", aiDee);
  label.textContent = textInput;

  formContainer.appendChild(label);
  formContainer.appendChild(dropdown);
}

export function submitProjectButton() {
  const formContainer = document.querySelector("form");
  let submitProjectButton = document.createElement("button");
  submitProjectButton.type = "submit";
  submitProjectButton.innerText = "Submit";
  submitProjectButton.id = "submitBTN";
  formContainer.appendChild(submitProjectButton);

  submitProjectButton.addEventListener("click", (event) => {
    event.preventDefault();
    takeProjectFormInput();

    console.log("Form submitted!");
  });
}

export function submitTaskButton(projectIndex) {
  const formContainer = document.querySelector("form");
  let submitTaskButton = document.createElement("button");
  submitTaskButton.type = "submit";
  submitTaskButton.innerText = "Submit";
  submitTaskButton.id = "submitTBTN";
  formContainer.appendChild(submitTaskButton);

  submitTaskButton.addEventListener("click", (event) => {
    event.preventDefault();
    takeTaskFormInput(projectIndex);
    displayProjectDetails(projectIndex);
    console.log("Form submitted!");
  });
}

export function deleteButton(index) {
  const formContainer = document.querySelector("form");
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.id = "deleteBTN";
  formContainer.appendChild(deleteButton);

  deleteButton.addEventListener("click", (event) => {
    event.preventDefault();

    const allProjects = getStoredProjects();
    allProjects.splice(index, 1);
    saveProjects(allProjects);

    contentBox.innerHTML = "";
    createProjectButton();
  });
}

export function saveChangesButton(index) {
  const formContainer = document.querySelector("form");
  let changeButton = document.createElement("button");
  changeButton.type = "submit";
  changeButton.innerText = "Save Changes";
  changeButton.id = "saveChange";
  formContainer.appendChild(changeButton);

  changeButton.addEventListener("click", (event) => {
    event.preventDefault();
    changeProjectForm(index);
    displayProjectDetails(index);
  });
}

export function addTask(projectIndex) {
  const formContainer = document.querySelector("form");
  let addTaskButton = document.createElement("button");
  addTaskButton.type = "submit";
  addTaskButton.innerText = "Add Task";
  addTaskButton.id = "addTask";
  formContainer.appendChild(addTaskButton);

  addTaskButton.addEventListener("click", (event) => {
    event.preventDefault();
    createNewTaskForm(projectIndex);
  });
}

//create buttons in the nav bar with the title of the projects present in the array
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

  const sorted = allProjects.sort((a, b) => a.title.localeCompare(b.title));
  saveProjects(sorted);

  projectButtonsContainer.innerHTML = "";

  sorted.forEach((project, index) => {
    const projectButton = document.createElement("button");
    projectButton.id = `project-${index}`;
    projectButton.dataset.index = index;
    projectButton.innerText = `${project.title}`;

    projectButtonsContainer.appendChild(projectButton);

    projectButton.addEventListener("click", (event) => {
      displayProjectDetails(index);
      const projectIndex = event.target.dataset.index;
    });
  });
}

export function editProjectButton() {
  const formContainer = document.querySelector("form");
  let editProjectButton = document.createElement("button");
  editProjectButton.type = "submit";
  editProjectButton.innerText = "Edit Project";
  editProjectButton.id = "editProject";
  formContainer.appendChild(editProjectButton);
}

export function deleteTask(projectIndex, taskIndex) {
  const allProjects = getStoredProjects();
  const project = allProjects[projectIndex];
  project.tasks.splice(taskIndex, 1);
  localStorage.setItem("projects", JSON.stringify(allProjects));
  displayProjectDetails(projectIndex);
}
