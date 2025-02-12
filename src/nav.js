const navBarMain = document.getElementById("nav");
const navBarContainer = document.createElement("div");
navBarContainer.id ="navBarTop";
const sortButtonTitle = document.createElement("div")
sortButtonTitle.id = "sortBTNtitle";
sortButtonTitle.textContent = "Sort Projects";
navBarMain.appendChild(sortButtonTitle);
navBarMain.appendChild(navBarContainer);

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

const createProjectButton = () => {
 const createProjectBtn = document.createElement("button");
 createProjectBtn.id = "createNewProject";
 createProjectBtn.textContent = "Create a New Project";
 navBarMain.appendChild(createProjectBtn);
}

export function setUpNavBar() {
    createSortButton();
    assignSortFunctiontoButton();
    createProjectButton();
}
