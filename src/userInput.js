// deals with all user input
import { createProjectButton } from "./helperFunctions.js";
import { getStoredProjects, saveProjects } from "./localStorage";
const projectsInputted = getStoredProjects();

class Project {
  constructor(title, description, dueDate, priority, finished) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.finished = finished;
    this.tasks = [];
  }
    addTask(task) {
      this.tasks.push(task);
    }
}

export function takeProjectFormInput(event) {

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

  const newProject = new Project(
      projectTitle,
      projectDescription,
      projectDueDate,
      projectPriority,
      projectFinished
  );

  projectsInputted.push(newProject);
  saveProjects(projectsInputted);

  createProjectButton();
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

  createProjectButton();
}

export function changeTasksForm(projectIndex, taskIndex) {
  const allProjects = getStoredProjects();
  const project = allProjects[projectIndex];

  if (!project || !project.tasks[taskIndex]) {
      console.error("Project or task not found.");
      return;
  }

  project.tasks[taskIndex] = { 
      title: document.getElementById("taskTitle").value,
      description: document.getElementById("taskDescription").value,
      dueDate: document.getElementById("taskDueDate").value,
      priority: document.getElementById("taskPriority").value,
      finished: document.getElementById("taskFinished").checked,
  };

  saveProjects(allProjects);
  displayProjectDetails(projectIndex);
}
