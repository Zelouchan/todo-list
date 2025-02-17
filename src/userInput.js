// deals with all user input
import { createProjectButton } from "./helperFunctions.js";
import { getStoredProjects, saveProjects } from "./localStorage";
import { displayProjectDetails } from "./createForms.js";
const allProjects = getStoredProjects();

class Project {
  constructor(title, description, dueDate, priority, finished, tasks = []) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.finished = finished;
    this.tasks = tasks;
  }
}

// function that saves the new project into the array
export function takeProjectFormInput() {
  const contentBox = document.getElementById("content");
  const projectTitleInput = document.getElementById("projectTitle");
  const projectDescriptionInput = document.getElementById("projectDescription");
  const projectDueDateInput = document.getElementById("projectDueDate");
  const projectPriorityInput = document.getElementById("projectPriority");
  const projectFinishedInput = document.getElementById("projectFinished");

  if (
    !projectTitleInput.value.trim() ||
    !projectDescriptionInput.value.trim() ||
    !projectDueDateInput.value.trim()
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  const projectTitle = projectTitleInput.value;
  const projectDescription = projectDescriptionInput.value;
  const projectDueDate = projectDueDateInput.value;
  const projectPriority = projectPriorityInput.value;
  const projectFinished = projectFinishedInput.checked;
  const projectTasks = [];

  const newProject = new Project(
    projectTitle,
    projectDescription,
    projectDueDate,
    projectPriority,
    projectFinished,
    projectTasks
  );

  allProjects.push(newProject);
  saveProjects(allProjects);

  const projectIndex = allProjects.length - 1;

  createProjectButton();
  displayProjectDetails(projectIndex);
}

class Task {
  constructor(title, description, dueDate, priority, finished) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.finished = finished;
  }
}

//function that saves the task information into the array attached to the correct project
export function takeTaskFormInput(projectIndex) {
  const contentBox = document.getElementById("content");
  const taskTitleInput = document.getElementById("taskTitle");
  const taskDescriptionInput = document.getElementById("taskDescription");
  const taskDueDateInput = document.getElementById("taskDueDate");
  const taskPriorityInput = document.getElementById("taskPriority");
  const taskFinishedInput = document.getElementById("taskFinished");

  if (
    !taskTitleInput.value.trim() ||
    !taskDescriptionInput.value.trim() ||
    !taskDueDateInput.value.trim()
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  const taskTitle = taskTitleInput.value;
  const taskDescription = taskDescriptionInput.value;
  const taskDueDate = taskDueDateInput.value;
  const taskPriority = taskPriorityInput.value;
  const taskFinished = taskFinishedInput.checked;

  const newTask = new Task(
    taskTitle,
    taskDescription,
    taskDueDate,
    taskPriority,
    taskFinished
  );

  if (!allProjects[projectIndex]) {
    // Check if the project exists
    console.error("Project not found at index:", projectIndex);
    return;
  }

  allProjects[projectIndex].tasks.push(newTask);

  saveProjects(allProjects);
  createProjectButton(projectIndex);
  contentBox.innerHTML = ""; // Clear the form
}

// overwrites the current values of the project in the array, doesn't create a new array object.
export function changeProjectForm(index) {
  let allProjects = getStoredProjects();
  let updatedProject = {
    title: document.getElementById("projectTitle").value,
    description: document.getElementById("projectDescription").value,
    dueDate: document.getElementById("projectDueDate").value,
    priority: document.getElementById("projectPriority").value,
    finished: document.getElementById("projectFinished").checked,
  };

  allProjects[index] = updatedProject;
  saveProjects(allProjects);
  createProjectButton(index);
}

// creates a task form with the task details already displayed for editting
export function changeTasksForm(projectIndex, taskIndex) {
  const allProjects = getStoredProjects();
  const project = allProjects[projectIndex];

  if (!project || !project.tasks[taskIndex]) {
    console.error("Project or task not found.");
    return;
  }

  const titleElement = document.getElementById("taskTitle");
  const descriptionElement = document.getElementById("taskDescription");
  const dueDateElement = document.getElementById("taskDueDate");
  const priorityElement = document.getElementById("taskPriority");
  const finishedElement = document.getElementById("taskFinished");

  if (
    !titleElement ||
    !descriptionElement ||
    !dueDateElement ||
    !priorityElement ||
    !finishedElement
  ) {
    console.error("One or more form elements not found.");
    return;
  }

  project.tasks[taskIndex] = {
    title: titleElement.value,
    description: descriptionElement.value,
    dueDate: dueDateElement.value,
    priority: priorityElement.value,
    finished: finishedElement.checked,
  };

  saveProjects(allProjects);
  displayProjectDetails(projectIndex);
}
