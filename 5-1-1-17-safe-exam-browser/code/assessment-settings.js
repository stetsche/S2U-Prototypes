/*
ASSESSMENT SETTINGS VIEW

1. As instructor create assessment
2. Go to assessment settings
3. Inject this JS code
*/

const config = {
  template: false,
}


function show(element) {
  element.style.display = "block";
}

function hide(element) {
  element.style.display = "none";
}

const showAll = (elements) => elements.forEach(show);
const hideAll = (elements) => elements.forEach(hide);

function updateVisibility() {
  updateView();
  switch (view.settings.mode.value) {
    case "disabled":
      hide(view.settings.container);
      hideAll(view.settings.manualContainers);
      hide(view.settings.uploadContainer);
      hide(view.settings.quitPass);
      break;
    case "manual":
      show(view.settings.container);
      showAll(view.settings.manualContainers);
      hide(view.settings.uploadContainer);
      if (view.settings.quitEnabled.value == "y") {
        show(view.settings.quitPass);
      } else {
        hide(view.settings.quitPass);
      }
      if (view.settings.taskBar.value == "y") {
        show(view.settings.taskBarContainer);
      } else {
        hide(view.settings.taskBarContainer);
      }
      break;
    case "upload":
      show(view.settings.container);
      hideAll(view.settings.manualContainers);
      show(view.settings.uploadContainer);
      hide(view.settings.quitPass);
      break;
  }
}

function getView() {
  return {
    securityProctoringSection: document.querySelectorAll('[id*="__hide_division_assessmentSettingsAction"]')[3],
    settings: {
      mode: document.getElementById("sebMode"),
      container: document.querySelector(".seb-settings"),
      manualContainers: document.querySelectorAll(".seb-manual-config-settings"),
      uploadContainer: document.querySelector(".seb-upload-settings"),
      quitPass: document.querySelector(".seb-quit-pass"),
      quitEnabled: document.querySelector("#sebManEnablequittingofSEB"),
      taskBar: document.querySelector("#sebManShowSEBtaskbar"),
      taskBarContainer: document.querySelector(".seb-manual-taskbar-settings"),
    }
  };
}

function updateView () {
  view = getView();
};

function manualSettingsHtml(labels) {
  return labels
    .map((label, index) => manualSettingHtml(index, label))
    .join("\n");
}

function manualSettingHtml(num, label) {
  return `
    <div class="form-group row">
      <label for="sebMan${label.replaceAll(' ', '')}" class="col-md-2 form-control-label">${label}</label>
      <div class="col-md-10">
        <select id="sebMan${label.replaceAll(' ', '')}">
          <option value="y" selected="selected">Yes</option>
          <option value="n">No</option>
        </select>
      </div>
    </div>
  `;
}

function addHelpText(selector, text) {
  const element = document.querySelector(selector);
  element.insertAdjacentHTML("afterend", `
    <label class="help-block info-text small">${text}</label>
  `);
}


updateView();

view.securityProctoringSection.insertAdjacentHTML("beforeend", `
  <div class="samigo-subheading">
    <label>Safe Exam Browser</label>
  </div>
  <div class="form-group row">
    <label for="sebMode" class="col-md-2 form-control-label">Require the use of Safe Exam Browser</label>
    <div class="col-md-10">
      <select id="sebMode">
        <option value="disabled" selected="selected">No</option>
        <option value="manual">Yes – Configure manually</option>
        ${config.template ?
          `<option value="template">Yes – Use an existing template</option>`
         : ""
         }
        <option value="upload">Yes – Upload my own config</option>
      </select>
    </div>
  </div>
  <div class="seb-settings">


    <div class="seb-manual-config-settings">
      ${manualSettingsHtml(["Enable quitting of SEB"])}
    </div>
    <div class="form-group row seb-quit-pass">
      <label for="sebQuitPass" class="col-md-2 form-control-label">Quit Password</label>
      <div class="col-md-10">
        <input id="sebQuitPass" type="text" value="" class="form-control" size="20">
      </div>
    </div>

    <div class="seb-manual-config-settings">
      ${manualSettingsHtml([
        "Ask user to confirm quitting",
        "Allow page reload while taking assessment",
        "Show SEB task bar",
        ])}
      <div class="seb-manual-taskbar-settings">
        ${manualSettingsHtml([
          "Show reload button",
          "Show time",
          "Show keyboard layout",
          "Show Wi-Fi control",
          "Enable audio controls",
          ])}
      </div>
       ${manualSettingsHtml([
        "Enable spell checking",
        "Enable URL filtering",
        ])}
    </div>
    <div class="seb-upload-settings">
      <div class="form-group row">
        <label for="sebUpload" class="col-md-2 form-control-label">Upload Safe Exam Browser config file</label>
      <div class="col-md-10">
        <input id="sebUpload" type="file" value="" class="" size="20">
      </div>
    </div>
    </div>

    <div class="form-group row">
      <label for="sebExamKeys" class="col-md-2 form-control-label">Allowed browser exam keys</label>
      <div class="col-md-10">
        <textarea id="sebExamKeys" cols="40" rows="5"></textarea>
        <label class="help-block info-text small">
          In this field you can enter the allowed browser exam keys for versions of Safe 
          Exam Browser that are permitted to access this quiz. If no keys are entered, 
          then browser exam keys are not checked.
        </label>
      </div>
    </div>
  </div>
`);


updateVisibility();
addHelpText("#sebManAskusertoconfirmquitting", "If enabled, users have to confirm quitting of " +
  "SEB when clicking on the exit button at the end of the assessment");
addHelpText("#sebManEnablequittingofSEB", 'If enabled, users can quit SEB with the "Quit" button ' +
  "in the SEB task bar or by pressing the keys Ctrl-Q or by clicking the main browser window close button.");

view.settings.mode.addEventListener("change", updateVisibility);
view.settings.quitEnabled.addEventListener("change", updateVisibility);
view.settings.taskBar.addEventListener("change", updateVisibility);
