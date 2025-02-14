const contentBox = document.getElementById("content");
import { takeProjectFormInput } from "./userInput";

export function createInputForm(klas) {
  const inputForm = document.createElement("form");
  inputForm.classList.add(klas);
  contentBox.appendChild(inputForm);
}

export function createInputText(aiDee, textInput) {
  const formContainer = document.querySelector("form"); 
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.id = aiDee;

  const label = document.createElement("label");
  label.setAttribute("for", aiDee);
  label.textContent = textInput;

  formContainer.appendChild(label);
  formContainer.appendChild(inputField);
}

export function createDate(aiDee, textInput) {
  const formContainer = document.querySelector("form");
  const inputField = document.createElement("input");
  inputField.type = "date";
  inputField.id = aiDee;

  const label = document.createElement("label");
  label.setAttribute("for", aiDee);
  label.textContent = textInput;

  formContainer.appendChild(label);
  formContainer.appendChild(inputField);
}

export function createCheckbox(aiDee, textInput) {
  const formContainer = document.querySelector("form");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = aiDee;

  const label = document.createElement("label");
  label.setAttribute("for", aiDee);
  label.textContent = textInput;

  formContainer.appendChild(label);
  formContainer.appendChild(checkbox);
}

export function createDropdown(aiDee, textInput) {
  const formContainer = document.querySelector("form");
  const dropdown = document.createElement("select");
  dropdown.id = aiDee;

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
  });
}

export function deleteButton() {
  const formContainer = document.querySelector("form");
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.id = "deleteBTN";
  formContainer.appendChild(deleteButton);

  deleteButton.addEventListener("click", (event) => {
    // event.preventDefault();
    // add code to remove array
    console.log("Form deleted.");
  });
}
