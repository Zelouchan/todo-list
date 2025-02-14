const contentBox = document.getElementById("content");
import { takeProjectFormInput, changeProjectForm } from "./userInput";
import { createProjectButton } from "./createProjectDisplay";
import { saveProjects, getStoredProjects } from "./localStorage";

export function createInputForm(klas) {
  const inputForm = document.createElement("form");
  inputForm.classList.add(klas);
  contentBox.appendChild(inputForm);
}

export function createInputText(aiDee, textInput, projectValue) {
  const formContainer = document.querySelector("form"); 
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.id = aiDee;
  inputField.value = projectValue || '';

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
  inputField.value = projectValue || '';

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


export function saveChangesButton() {
  const formContainer = document.querySelector("form");
  let changeButton = document.createElement("button");
  changeButton.type = "submit";
  changeButton.innerText = "Save Changes";
  changeButton.id = "saveChange";
  formContainer.appendChild(changeButton);

  changeButton.addEventListener("click", (event) => {
    event.preventDefault();
    changeProjectForm();
    saveProjects(allProjects);
  });
}
