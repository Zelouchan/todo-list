// Storing user inputted projects
export const projectsInputted = JSON.parse(localStorage.getItem("projects")) || [];

class Project {
    constructor(title, description, dueDate, priority, finished) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.finished = finished;
    }
}

export function takeFormInput(event) {
    event.preventDefault(); 

    const projectTitle = document.getElementById("projectTitle").value;
    const projectDescription = document.getElementById("projectDescription").value;
    const projectDueDate = document.getElementById("projectDueDate").value;
    const projectPriority = document.getElementById("projectPriority").value;
    const projectFinished = document.getElementById("projectFinished").checked; // Checkbox

    const newProject = new Project(projectTitle, projectDescription, projectDueDate, projectPriority, projectFinished);

    projectsInputted.push(newProject);

    localStorage.setItem('projects', JSON.stringify(projectsInputted));
}


