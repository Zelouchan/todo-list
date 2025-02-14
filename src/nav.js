// localStorage.removeItem("projects");

const navBarMain = document.getElementById("nav");
const projectsTitle = document.createElement("div");
projectsTitle.innerText = "Current Projects";
projectsTitle.classList.add("sortBTNtitle");
const navBarContainer = document.createElement("div");
navBarContainer.id ="navBarTop";
const sortButtonTitle = document.createElement("div")
sortButtonTitle.classList.add("sortBTNtitle");
sortButtonTitle.textContent = "Sort Projects";
navBarMain.appendChild(sortButtonTitle);
navBarMain.appendChild(navBarContainer);
navBarMain.appendChild(projectsTitle);

function createSortButton() {
    ["A-Z", "Prio", "Due"].forEach((text, i) => {
        let sortButton = document.createElement("button");
        sortButton.textContent = text;
        sortButton.id = ["alphabet", "priority", "dueDate"][i];
        sortButton.classList.add("sortButtons");
        navBarContainer.appendChild(sortButton);
      });
    }

function sortProjects() {
    console.log("hi");
    // urgency
    // due date
    // alphabet
}

function assignSortFunctiontoButton() {
    console.log("just so it is not empty")
}

export const createProjectButton = () => {
 const createProjectBtn = document.createElement("button");
 createProjectBtn.id = "createNewProject";
 createProjectBtn.textContent = "Create a New Project";
 navBarMain.appendChild(createProjectBtn);
}

export function setUpNavBar() {
    createProjectButton();
    createSortButton();
    assignSortFunctiontoButton();
}
