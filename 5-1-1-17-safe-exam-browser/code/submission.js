/*
SUBMISSION/FINAL VIEW

Steps to reproduce:
1. Open any assessment as a student
2. Take the assessment and stop at the
   final screen (Submission)
2. Inject this JS code in browser console
*/

const view = {
  tier1: document.querySelector(".tier1"),
  buttonContainer: document.querySelector(".tier1 td"),
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

clearElement(view.buttonContainer);
view.tier1.classList.add("act");
addButton("Exit Safe Exam Browser", true);
