const contentBox = document.getElementById("content");

function createInputForm(klas) {
    const inputForm = document.createElement("form");
    inputForm.classList.add(klas);
    contentBox.appendChild(inputForm);  
}

function createInputText(aiDee, textInput) {
    const projectTitle = document.createElement("input");
    projectTitle.type = "text";
    projectTitle.id = aiDee;
  
    const projectTitleLabel = document.createElement("label");
    projectTitleLabel.setAttribute("for", aiDee);
    projectTitleLabel.textContent = textInput;
    projectTitleLabel.appendChild(projectTitle);
    formContainer.appendChild(projectTitleLabel);
}

function createDate(aiDee, textInput) {
    const formContainer = document.getElementsByTagName("form")[0];

    const projectDueDate = document.createElement("input");
    projectDueDate.type = "date";
    projectDueDate.id = aiDee;
  
    const projectDueDateLabel = document.createElement("label");
    projectDueDateLabel.setAttribute("for", aiDee);
    projectDueDateLabel.textContent = textInput;
    projectDueDateLabel.appendChild(projectDueDate);
    formContainer.appendChild(projectDueDateLabel);
}

function createCheckbox(aiDee, textInput) {

    const formContainer = document.getElementsByTagName("form")[0];
    const projectFinished = document.createElement("input");
    projectFinished.type = "checkbox";
    projectFinished.id = aiDee;
  
    const projectFinishedLabel = document.createElement("label");
    projectFinishedLabel.setAttribute("for", aiDee);
    projectFinishedLabel.textContent = textInput;
    projectFinishedLabel.appendChild(projectFinished);
    formContainer.appendChild(projectFinishedLabel);
}

function createDropdown(aiDee, textInput) {
    const formContainer = document.getElementsByTagName("form")[0];
    const dropdown = document.createElement("select");
    dropdown.id = aiDee;
  
    const priorityHigh = document.createElement("option");
    priorityHigh.value = "High";
    priorityHigh.textContent = "High";
    const priorityMid = document.createElement("option");
    priorityMid.value = "Mid";
    priorityMid.textContent = "Mid";
    const priorityLow = document.createElement("option");
    priorityLow.value = "Low";
    priorityLow.textContent = "Low";
  
    dropdown.appendChild(priorityHigh);
    dropdown.appendChild(priorityMid);
    dropdown.appendChild(priorityLow);
  
    const projectPriorityLabel = document.createElement("label");
    projectPriorityLabel.setAttribute("for", aiDee);
    projectPriorityLabel.textContent = textInput;
    projectPriorityLabel.appendChild(dropdown);
    formContainer.appendChild(projectPriorityLabel);
}

function submitButton() {
  const formContainer = document.getElementsByTagName("form")[0];
  let submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.innerText = "Submit";
  submitButton.id = "submitBTN";
  formContainer.appendChild(submitButton);

  const form = document.getElementById("submitBTN");
  form.addEventListener("click", takeProjectFormInput);
}

function deleteButton() {
    const formContainer = document.getElementsByTagName("form")[0];
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Submit";
    deleteButton.id = "deleteBTN";
    formContainer.appendChild(submitButton);
  
    const form = document.getElementById("deleteBTN");
    form.addEventListener("click", deleteProject);
}

function deleteProject() {
    deleteButton.addEventListener("click", function () {
     storedProjects.splice(index, 1);
})};