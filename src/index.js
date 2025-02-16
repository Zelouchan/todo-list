// index.js
import { compareAsc, format } from "date-fns";
import "./style.css";
import { headerFooter } from "./HeaderFooter";
import { setUpNavBar } from "./nav.js";
import { getStoredProjects } from "./localStorage.js";
import { createNewProjectForm } from "./createForms.js";
import { createProjectButton} from "./helperFunctions.js";

headerFooter();
setUpNavBar();

console.log(getStoredProjects());

const newProject = document.getElementById("createNewProject");
newProject.addEventListener("click", createNewProjectForm);

createProjectButton();
