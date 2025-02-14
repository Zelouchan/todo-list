// Storing user inputted projects
export const projectsInputted =
  JSON.parse(localStorage.getItem("projects")) || [];
import { createProjectButton } from "./createProjectDisplay";
import { getStoredProjects, saveProjects } from "./localStorage";

class Project {
  constructor(title, description, dueDate, priority, finished) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.finished = finished;
  }
}

export function takeProjectFormInput(event) {
  const projectTitle = document.getElementById("projectTitle").value;
  const projectDescription =
    document.getElementById("projectDescription").value;
  const projectDueDate = document.getElementById("projectDueDate").value;
  const projectPriority = document.getElementById("projectPriority").value;
  const projectFinished = document.getElementById("projectFinished").checked; // Checkbox

  const newProject = new Project(
    projectTitle,
    projectDescription,
    projectDueDate,
    projectPriority,
    projectFinished
  );

  projectsInputted.push(newProject);

  localStorage.setItem("projects", JSON.stringify(projectsInputted));

  createProjectButton();
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
