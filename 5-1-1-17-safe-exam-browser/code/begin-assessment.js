/*
BEGIN ASSESSMENT VIEW

Steps to reproduce:
1. Open any assessment as a student
2. Inject this JS code in browser console
*/

const view = {
  heading: document.querySelector(".lead"),
  honorContainer: document.querySelector(".honor-container"),
  buttonContainer: document.querySelector("p.act"),
  warnBanner: document.querySelector(".sak-banner-warn"),
};

function clearElement(element) {
  element.innerHTML = "";
}

function addButton (text, primary = false) {
    const button = document.createElement("button");
  button.innerText = text;
  if (primary) {
    button.classList.add("active");
  } else {
    button.classList.add("btn", "btn-secondary");
  }
  view.buttonContainer.appendChild(button);
}

//view.heading.innerText = '"Assessment Name" for Site Name';

view.warnBanner.remove();

clearElement(view.honorContainer);
view.honorContainer.innerText = "This assessment requires the use of Safe Exam Browser. " +
"Please make sure Safe Exam Browser is installed and click the launch button";

clearElement(view.buttonContainer);
addButton("Launch Safe Exam Browser", true);
addButton("Download Safe Exam Browser");
addButton("Download Configuration");
addButton("Cancel");
