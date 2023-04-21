/*
GRADING NAVIGATION

Steps to reproduce:
1. Create assessment, take it as student
2. As instructor go to grading page (All scores)
3. Inject this JS code in browser console
*/

const heading = document.querySelector("h1");

heading.parentElement.style = `
    display: flex;
    justify-content: space-between;
`;

heading.insertAdjacentHTML("afterend", `
    <div style="display:flex; gap: 4px;">
        <div class="dropdown">
            <button class="button" data-nav-settings data-toggle="dropdown" title="Navigation settings">
                <span class="fa fa-cogs"></span>
            </button>
            <div class="dropdown-menu" style="padding:3px 20px; white-space:nowrap;">
                <div class="form-row">
                    <div class="checkbox">
                        <label><input type="checkbox" checked="checked" value="">Only show ungraded submissions</label>
                    </div>
                </div>
            </div>
        </div>
        <button class="button" disabled="disabled" style="margin-right:0px;" title="Previous submission">
            <span class="fa fa-chevron-circle-left "></span>
        </button>
        <select aria-label="Student selector">
            <option value="02bd16d7-cffa-484e-a114-52b52416d948">der Pluijm, Ben van (student0003</option>
            <option value="a56dfcb1-6a2d-4172-ad37-938273aaf482">van der Voo, Rob (student0004)</option>
            <option value="3d5bb02d-c021-4857-bed2-791938002c96">van Dijk, Victor (student0001)</option>
            <option value="058d9d16-0e12-46e4-9cee-5669e8bc1236">van Keken, Peter (student0002)</option>
        </select>
        <button class="button" title="Next submission">
            <span class="fa fa-chevron-circle-right "></span>
        </button>
    </div>
`);

document.querySelector("[data-nav-settings]")
        .addEventListener("click", (event) => event.preventDefault());
