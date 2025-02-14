// import { compareAsc, format } from "date-fns";
import "./style.css";
import { headerFooter } from "./HeaderFooter";
import { setUpNavBar } from "./nav.js";

import { getStoredProjects } from "./localStorage.js";
import { createProjectButton } from "./createProjectDisplay.js";
import { createNewProjectForm } from "./createFormsDynamically.js";

headerFooter();
setUpNavBar();

console.log(getStoredProjects());

const newProject = document.getElementById("createNewProject");
newProject.addEventListener("click", createNewProjectForm);

createProjectButton();
