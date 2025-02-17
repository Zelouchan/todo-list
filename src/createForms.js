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
  deleteTask,
} from "./helperFunctions.js";
import { getStoredProjects } from "./localStorage.js";
import { format } from "date-fns";

// creates empty project form
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

// creates empty task form
export function createNewTaskForm(projectIndex) {
  contentBox.innerHTML = "";
  createInputForm("inputForm");
  createInputText("taskTitle", "Task Title: ", "", 15);
  createInputText("taskDescription", "Task Notes: ", "", 2000);
  createDate("taskDueDate", "Due Date: ");
  createDropdown("taskPriority", "Priority Level: ");
  createCheckbox("taskFinished", "Task Finished? ");
  submitTaskButton(projectIndex);
}

//creates project form with previously filled in values present
export function callProjectForm(projectIndex) {
  contentBox.innerHTML = "";
  const allProjects = getStoredProjects();
  const project = allProjects[projectIndex];

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
  saveChangesButton(projectIndex);
  deleteButton(projectIndex);
}

// creates task for with previously filled in values present
export function callTaskForm(projectIndex, index) {
  contentBox.innerHTML = "";
  const allProjects = getStoredProjects();
  const project = allProjects[projectIndex];
  const task = project.tasks[index];

  if (!task) {
    console.error("Project not found.");
    return;
  }

  let taskTitle = task.title || "";
  let taskDescription = task.description || "";
  let taskDueDate = task.dueDate || "";
  let taskPriority = task.priority || "Medium";
  let taskFinished = task.finished || false;

  createInputForm("inputForm");
  createInputText("taskTitle", "Title: ", taskTitle);
  createInputText("taskDescription", "Description: ", taskDescription);
  createDate("taskDueDate", "Due Date: ", taskDueDate);
  createDropdown("taskPriority", "Priority Level: ", taskPriority);
  createCheckbox("taskFinished", "Task Finished? ", taskFinished);
  saveChangesButton(index);
  deleteButton(index);
}

// displays project with the list of tasks attatched
export function displayProjectDetails(projectIndex) {
  const allProjects = getStoredProjects();
  const project = allProjects[projectIndex];

  if (!project) {
    alert("Project not found");
    return;
  }

  const contentBox = document.getElementById("content");
  contentBox.innerHTML = "";
  createInputForm("projectDisplayContainer");
  const formContainer = document.querySelector("form");
  const detailsContainer = document.createElement("div");
  detailsContainer.id = "detailsCont";

  const titleHeading = document.createElement("h2");
  titleHeading.textContent = project.title;

  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.textContent = project.description;

  const dueDate = new Date(project.dueDate);
  const formattedDate = format(dueDate, "dd-MMM-yy");
  const dueDateParagraph = document.createElement("p");
  dueDateParagraph.textContent = "Due: " + formattedDate;

  const priorityParagraph = document.createElement("p");
  priorityParagraph.textContent = `Priority: ${project.priority}`;

  detailsContainer.classList.add(project.priority.toLowerCase());

  formContainer.appendChild(detailsContainer);
  detailsContainer.appendChild(titleHeading);
  detailsContainer.appendChild(descriptionParagraph);
  detailsContainer.appendChild(dueDateParagraph);
  detailsContainer.appendChild(priorityParagraph);

  const taskContainer = document.createElement("div");
  taskContainer.id = "taskCont";
  formContainer.appendChild(taskContainer);

  const allTasks = allProjects[projectIndex].tasks || [];

  //sorts list of tasks by due date
  const sortedTasks = allTasks.sort((a, b) => {
    const dateA = new Date(a.dueDate);
    const dateB = new Date(b.dueDate);
    return dateA - dateB;
  });

  sortedTasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("singleTask", task.priority.toLowerCase());

    const taskHeading = document.createElement("h3");
    taskHeading.textContent = task.title;

    const tasksParagraph = document.createElement("p");
    tasksParagraph.textContent = task.description;

    const dueDate = new Date(task.dueDate);
    const formattedDate = format(dueDate, "dd-MMM-yy");
    const tasksDueDateParagraph = document.createElement("p");
    tasksDueDateParagraph.textContent = "Due: " + formattedDate;

    const editTaskButton = document.createElement("button");
    editTaskButton.textContent = "Edit";
    editTaskButton.classList.add("smallTaskButton");
    editTaskButton.addEventListener("click", (event) => {
      event.preventDefault();
      callTaskForm(projectIndex, index);
    });

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

  addTask(projectIndex);
  editProjectButton();
  deleteButton();

  const editProjectBut = document.getElementById("editProject");

  editProjectBut.addEventListener("click", (event) => {
    event.preventDefault();
    callProjectForm(index);
  });
}
