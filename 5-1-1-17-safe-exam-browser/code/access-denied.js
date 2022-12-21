/*
ACCESS DENIED VIEW

Steps to reproduce:
1. Create an assessment and set a password in Security
   and Proctoring
2. Publish and copy the link from assessment settings
3. Using the link, open the assessment as a student
   and DON'T enter the password
4. Click on Begin Assessment
5. Inject this JS code in browser console
*/

const view = {
  returnLink: document.querySelector("a"),
  errorBanner: document.querySelector(".sak-banner-error"),
};

view.errorBanner.innerText = "It could not be verified that the " +
  "configuration of Safe Exam Browser is valid. This could be a " +
  "sign of cheating or a technical error. The current state of " +
  "your assessment has been saved. please contact your instructor " +
  "to enter the password to close Safe Exam Browser and enter the" +
  "assessment again";

view.returnLink.remove();
