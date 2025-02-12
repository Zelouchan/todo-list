import logo from "./assets/brain.svg"

export function header() {
    const headerElement = document.getElementById("header");
    const logoDiv = document.createElement("div");
    headerElement.appendChild(logoDiv);

    const logoImg = document.createElement("img");
    logoImg.src = logo;
    logoImg.alt = "todo list logo";
    logoDiv.appendChild(logoImg);

    const pageName = document.createElement("div");
    pageName.innerText = "X-Ternal Brain";
    headerElement.appendChild(pageName);
}