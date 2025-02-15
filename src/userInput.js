// deals with all user input
import { createProjectButton } from "./helperFunctions.js";
import { getStoredProjects, saveProjects } from "./localStorage";
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

export function takeProjectFormInput() {
  const contentBox = document.getElementById("content");
  const projectTitleInput = document.getElementById("projectTitle");
  const projectDescriptionInput = document.getElementById("projectDescription");
  const projectDueDateInput = document.getElementById("projectDueDate");
  const projectPriorityInput = document.getElementById("projectPriority");
  const projectFinishedInput = document.getElementById("projectFinished");

  if (!projectTitleInput || !projectDescriptionInput || !projectDueDateInput || !projectPriorityInput || !projectFinishedInput) {
      console.error("One or more input elements not found!");
      return; // Stop execution to prevent further errors
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

  createProjectButton();
  contentBox.innerHTML = ""; // Clear the form
}

class Task {
  constructor(title, description, dueDate, priority, finished) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.finished = finished;
  
} }

export function takeTaskFormInput(projectIndex) {
  const contentBox = document.getElementById("content");
  const taskTitleInput = document.getElementById("taskTitle");
  const taskDescriptionInput = document.getElementById("taskDescription");
  const taskDueDateInput = document.getElementById("taskDueDate");
  const taskPriorityInput = document.getElementById("taskPriority");
  const taskFinishedInput = document.getElementById("taskFinished");

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

  if (!allProjects[projectIndex]) { // Check if the project exists
    console.error("Project not found at index:", projectIndex);
    return;
  }

allProjects[projectIndex].tasks.push(newTask);


  saveProjects(allProjects);

  createProjectButton(projectIndex);
  contentBox.innerHTML = ""; // Clear the form
}

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

// export function changeTasksForm(projectIndex, taskIndex) {
//   const allProjects = getStoredProjects();
//   const project = allProjects[projectIndex];

//   if (!project || !project.tasks[taskIndex]) {
//       console.error("Project or task not found.");
//       return;
//   }

//   project.tasks[taskIndex] = { 
//       title: document.getElementById("taskTitle").value,
//       description: document.getElementById("taskDescription").value,
//       dueDate: document.getElementById("taskDueDate").value,
//       priority: document.getElementById("taskPriority").value,
//       finished: document.getElementById("taskFinished").checked,
//   };

//   saveProjects(allProjects);
//   displayProjectDetails(projectIndex);
// }
