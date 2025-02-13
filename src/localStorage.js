// Function to retrieve projects from localStorage
export function getStoredProjects() {
    const storedProjects = localStorage.getItem("projects");
    return storedProjects ? JSON.parse(storedProjects) : null; // Return null if nothing is found
}
