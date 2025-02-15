const contentBox = document.getElementById("content");
import { takeProjectFormInput, changeProjectForm } from "./userInput";
import { saveProjects, getStoredProjects } from "./localStorage";
import { createNewTasktForm, callProjectForm, displayProjectDetails } from "./createForms";

export function createInputForm(klas) {
  const inputForm = document.createElement("form");
  inputForm.classList.add(klas);
  contentBox.appendChild(inputForm);
}

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

export function submitButton() {
  const formContainer = document.querySelector("form");
  let submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.innerText = "Submit";
  submitButton.id = "submitBTN";
  formContainer.appendChild(submitButton);

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    takeProjectFormInput();
    console.log("Form submitted!");

    contentBox.innerHTML = "";
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

export function addTask() {
  const formContainer = document.querySelector("form");
  let addTaskButton = document.createElement("button");
  addTaskButton.type = "submit";
  addTaskButton.innerText = "Add Task";
  addTaskButton.id = "addTask";
  formContainer.appendChild(addTaskButton);

  addTaskButton.addEventListener("click", (event) => {
    event.preventDefault();
    createNewTasktForm();
  });
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
}

export function editProjectButton() {
  const formContainer = document.querySelector("form");
  let editProjectButton = document.createElement("button");
  editProjectButton.type = "submit";
  editProjectButton.innerText = "Edit Project";
  editProjectButton.id = "editProject";
  formContainer.appendChild(editProjectButton);
  };