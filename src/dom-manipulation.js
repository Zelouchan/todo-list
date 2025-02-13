import { takeFormInput } from "./userInput";
const contentBox = document.getElementById("content");

export function projectCreationForm() {
  const inputForm = document.createElement("form");
  contentBox.appendChild(inputForm);

  const formContainer = document.getElementsByTagName("form")[0];

  const projectTitle = document.createElement("input");
  projectTitle.type = "text";
  projectTitle.id = "projectTitle";

  const projectTitleLabel = document.createElement("label");
  projectTitleLabel.setAttribute("for", "projectTitle");
  projectTitleLabel.textContent = "Project Title: ";
  projectTitleLabel.appendChild(projectTitle);
  formContainer.appendChild(projectTitleLabel);

  const projectDescription = document.createElement("input");
  projectDescription.type = "text";
  projectDescription.id = "projectDescription";

  const projectDescriptionLabel = document.createElement("label");
  projectDescriptionLabel.setAttribute("for", "projectDescription");
  projectDescriptionLabel.textContent = "Project Description: ";
  projectDescriptionLabel.appendChild(projectDescription);
  formContainer.appendChild(projectDescriptionLabel);

  const projectDueDate = document.createElement("input");
  projectDueDate.type = "date";
  projectDueDate.id = "projectDueDate";

  const projectDueDateLabel = document.createElement("label");
  projectDueDateLabel.setAttribute("for", "projectDueDate");
  projectDueDateLabel.textContent = "Project Due Date: ";
  projectDueDateLabel.appendChild(projectDueDate);
  formContainer.appendChild(projectDueDateLabel);

  const projectFinished = document.createElement("input");
  projectFinished.type = "checkbox";
  projectFinished.id = "projectFinished";

  const projectFinishedLabel = document.createElement("label");
  projectFinishedLabel.setAttribute("for", "projectFinished");
  projectFinishedLabel.textContent = "Is the project finished?";
  projectFinishedLabel.appendChild(projectFinished);
  formContainer.appendChild(projectFinishedLabel);

  const dropdown = document.createElement("select");
  dropdown.id = "projectPriority";

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
  projectPriorityLabel.setAttribute("for", "projectPriority");
  projectPriorityLabel.textContent = "Set Project Priority: ";
  projectPriorityLabel.appendChild(dropdown);
  formContainer.appendChild(projectPriorityLabel);
}

export function taskCreationForm() {
  const inputForm = document.createElement("form");
  contentBox.appendChild(inputForm);

  const formContainer = document.getElementsByTagName("form")[0];
  const taskTitle = document.createElement("input");
  taskTitle.type = "text";
  taskTitle.id = "taskTitle";

  const taskTitleLabel = document.createElement("label");
  taskTitleLabel.setAttribute("for", "taskTitle");
  taskTitleLabel.textContent = "Task Title: ";
  taskTitleLabel.appendChild(taskTitle);
  formContainer.appendChild(taskTitleLabel);

  const taskDescription = document.createElement("input");
  taskDescription.type = "text";
  taskDescription.id = "taskDescription";

  const taskDescriptionLabel = document.createElement("label");
  taskDescriptionLabel.setAttribute("for", "taskDescription");
  taskDescriptionLabel.textContent = "Task Description: ";
  taskDescriptionLabel.appendChild(taskDescription);
  formContainer.appendChild(taskDescriptionLabel);

  const taskDueDate = document.createElement("input");
  taskDueDate.type = "date";
  taskDueDate.id = "taskDueDate";

  const taskDueDateLabel = document.createElement("label");
  taskDueDateLabel.setAttribute("for", "taskDueDate");
  taskDueDateLabel.textContent = "Task Due Date: ";
  taskDueDateLabel.appendChild(taskDueDate);
  formContainer.appendChild(taskDueDateLabel);

  const taskFinished = document.createElement("input");
  taskFinished.type = "checkbox";
  taskFinished.id = "taskFinished";

  const taskFinishedLabel = document.createElement("label");
  taskFinishedLabel.setAttribute("for", "taskFinished");
  taskFinishedLabel.textContent = "Is the task finished?";
  taskFinishedLabel.appendChild(taskFinished);
  formContainer.appendChild(taskFinishedLabel);

  const dropdown = document.createElement("select");
  dropdown.id = "taskPriority";

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

  const taskPriorityLabel = document.createElement("label");
  taskPriorityLabel.setAttribute("for", "taskPriority");
  taskPriorityLabel.textContent = "Set Task Priority: ";
  taskPriorityLabel.appendChild(dropdown);
  formContainer.appendChild(taskPriorityLabel);
}

export function submitButton() {
  const formContainer = document.getElementsByTagName("form")[0];
  let submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.innerText = "Submit";
  submitButton.id = "submitBTN";
  formContainer.appendChild(submitButton);

  const form = document.getElementById("submitBTN");
  form.addEventListener("click", takeFormInput);
}
