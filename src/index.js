// index.js
import "./style.css";
import { headerFooter } from "./HeaderFooter";
import { setUpNavBar } from "./nav.js";
import { createNewProjectForm, displayProjectDetails } from "./createForms.js";
import { createProjectButton } from "./helperFunctions.js";

headerFooter();
setUpNavBar();
displayProjectDetails(0); //loads project onto the screen
createProjectButton();

const newProject = document.getElementById("createNewProject");
newProject.addEventListener("click", createNewProjectForm);

createProjectButton();

