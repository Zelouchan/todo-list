// ties functions together to create the forms
const contentBox = document.getElementById("content");
import {
  addTask,
  createInputForm,
  createInputText,
  createCheckbox,
  createDate,
  createDropdown,
  submitTaskButton,
  submitProjectButton,
  deleteButton,
  saveChangesButton,
  editProjectButton,
  deleteTask
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
  submitProjectButton();
  console.log("create project");
}

export function createNewTasktForm(projectIndex) {
  contentBox.innerHTML = "";
  createInputForm("inputForm");
  createInputText("taskTitle", "Task Title: ", "", 15);
  createInputText("taskDescription", "Task Notes: ", "", 2000);
  createDate("taskDueDate", "Due Date: ");
  createDropdown("taskPriority", "Priority Level: ");
  createCheckbox("taskFinished", "Task Finished? ");
  submitTaskButton(projectIndex);
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

export function displayProjectDetails(projectIndex) {
  const allProjects = getStoredProjects();
  const project = allProjects[projectIndex];

  if (!project) {
    alert("Project not found");
    return;
  }

  const contentBox = document.getElementById("content");
  contentBox.innerHTML = "";
  createInputForm();
  const formContainer = document.querySelector("form");
  const detailsContainer = document.createElement("div");
  detailsContainer.id = "detailsCont";

  const titleHeading = document.createElement("h2");
  titleHeading.textContent = project.title;

  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.textContent = project.description;

  const dueDateParagraph = document.createElement("p");
  dueDateParagraph.textContent = `Due Date: ${project.dueDate}`;

  const priorityParagraph = document.createElement("p");
  priorityParagraph.textContent = `Priority: ${project.priority}`;

  formContainer.appendChild(detailsContainer);
  detailsContainer.appendChild(titleHeading);
  detailsContainer.appendChild(descriptionParagraph);
  detailsContainer.appendChild(dueDateParagraph);
  detailsContainer.appendChild(priorityParagraph);

  const taskContainer = document.createElement("div");
  taskContainer.id = "taskCont";
  formContainer.appendChild(taskContainer);

  const allTasks = allProjects[projectIndex].tasks || [];

  allTasks.forEach((task, index) => {

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("singleTask", task.priority.toLowerCase());

    const taskHeading = document.createElement("h3");
    taskHeading.textContent = task.title;

    const tasksParagraph = document.createElement("p");
    tasksParagraph.textContent = task.description;

    const tasksDueDateParagraph = document.createElement("p");
    tasksDueDateParagraph.textContent = `Due Date: ${task.dueDate}`;

    const editTaskButton = document.createElement("button");
    editTaskButton.textContent = "Edit";
    editTaskButton.classList.add("smallTaskButton");
    editTaskButton.addEventListener("click", () =>
      editTask(projectIndex, index)
    );

    const deleteTaskButton = document.createElement("button");
    deleteTaskButton.textContent = "Delete";
    deleteTaskButton.classList.add("smallTaskButton");
    deleteTaskButton.addEventListener("click", () =>
      deleteTask(projectIndex, index)
    );

    taskDiv.appendChild(taskHeading);
    taskDiv.appendChild(tasksParagraph);
    taskDiv.appendChild(tasksDueDateParagraph);
    taskDiv.appendChild(editTaskButton);
    taskDiv.appendChild(deleteTaskButton);

    taskContainer.appendChild(taskDiv);
  });

  editProjectButton();
  deleteButton();
  addTask(projectIndex);

  const editProjectBut = document.getElementById("editProject");

  editProjectBut.addEventListener("click", (event) => {
    event.preventDefault();
    callProjectForm();
  });
}
