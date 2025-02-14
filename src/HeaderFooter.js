import logo from "./assets/brain.svg";

//creates logo, page name, tagline and footer content
export function headerFooter() {
  const headerElement = document.getElementById("header");
  const logoDiv = document.createElement("div");
  logoDiv.id = "logoDiv";
  headerElement.appendChild(logoDiv);

  const logoImg = document.createElement("img");
  logoImg.src = logo;
  logoImg.alt = "todo list logo";
  logoDiv.appendChild(logoImg);

  const pageName = document.createElement("div");
  pageName.id = "pageName";
  pageName.innerText = "X-Ternal Brain";
  headerElement.appendChild(pageName);

  const tagline = document.createElement("div");
  tagline.id = "tagline";
  tagline.innerText =
    "Using 1's and 0's when the real one is just not doing it";
  headerElement.appendChild(tagline);

  const footerElement = document.getElementById("footer");
  const footerContent = document.createElement("div");
  footerContent.innerText = "Made by Tamara as part of the Odin Project.";
  footerElement.appendChild(footerContent);
}
