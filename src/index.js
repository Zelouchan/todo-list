// index.js
import { compareAsc, format } from "date-fns";
import "./style.css";
import { headerFooter } from "./HeaderFooter";
import { setUpNavBar } from "./nav.js";
import { createNewProjectForm, displayProjectDetails } from "./createForms.js";
import { createProjectButton } from "./helperFunctions.js";

headerFooter();
setUpNavBar();
displayProjectDetails(0);
createProjectButton();

const newProject = document.getElementById("createNewProject");
newProject.addEventListener("click", createNewProjectForm);

createProjectButton();

const today = new Date();

const formattedDate = format(today, 'dd-MM-yy');
console.log(formattedDate); 
