// Function to retrieve projects from localStorage
export function getStoredProjects() {
  const storedProjects = localStorage.getItem("projects");
  return storedProjects ? JSON.parse(storedProjects) : null; // Return null if nothing is found
}

// save projects to local storage
export function saveProjects(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}
