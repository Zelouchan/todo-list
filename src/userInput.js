// Getting project input values
export const projectsInputted = [];

class project  {
    constructor(title, description, dueDate, priority, finished) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.finished = finished;
    }
}

// Getting task input values
// const taskTitle = document.getElementById("taskTitle").value;
// const taskNotes = document.getElementById("taskNotes").value;
// const taskDueDate = document.getElementById("taskDueDate").value;
// const taskPriority = document.getElementById("taskPriority").checked; // Checkbox
// const taskFinished = document.getElementById("taskFinished").checked; // Checkbox

const form = document.getElementById("submitBTN");

// form.addEventListener("click", function (event) {
//     event.preventDefault();

    const projectTitle = document.getElementById("projectTitle").value;
    const projectDescription = document.getElementById("projectDescription").value;
    const projectDueDate = document.getElementById("projectDueDate").value;
    const projectPriority = document.getElementById("projectPriority").checked; // Checkbox
    const projectFinished = document.getElementById("projectFinished").checked; // Checkbox
    

const newProject = new project(projectTitle, projectDescription, projectDueDate, projectPriority, projectFinished);
});
projectsInputted.push(newProject);




