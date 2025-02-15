// Function to retrieve projects from localStorage
export function getStoredProjects() {
  const storedProjects = localStorage.getItem("projects");
  return storedProjects ? JSON.parse(storedProjects) : null; // Return null if nothing is found
}

export function saveProjects(projects) {
  localStorage.setItem("projects", JSON.stringify(projects));
}

const allProjects = getStoredProjects();

// allProjects.forEach((project, index) => {
//   const index = index;
//   console.log(project);

//   // You can also call other functions here, passing the index:
//   anotherFunction(index); 
// });