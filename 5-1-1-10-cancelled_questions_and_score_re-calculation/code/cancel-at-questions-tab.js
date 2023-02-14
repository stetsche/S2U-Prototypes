/*
CANCEL AT QUESTIONS TAB

Steps to reproduce:
1. Create an assessment with a few questions and activate feedback
2. Publish and take assessment as student
3. As instructor in assessments list click on Actions -> Scores -> Questions (Tab)
4. Inject this JS code in browser console
*/

const question = document.querySelector(".samigo-question-callout");

question.insertAdjacentHTML("afterend", `
    <div class="form-row">
        <input type="submit" id="cancelButton" class="button" value="Cancel this question" />
    </div>
`);

const otherModal = document.getElementById("profileImageUpload");

otherModal.insertAdjacentHTML("afterend", `
    <div id="cancelQuestionModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">How should cancelled points be handled?</h4>
                </div>
                <div class="modal-body">
                    <div class="sak-banner-info">
                        Cancelling this question will cause a re-calculation of the grades
                        for this assessment. The cancellation of this questions points can
                        be handled in two ways:<br />
                        <br />
                        <strong>Reduce total points:</strong>
                        Possible score of cancelled question will be deducted from the total
                        points. Other questions remain unaffected.<br />
                        <br />
                        <strong>Equally distribute points:</strong>
                        Possible score of cancelled question will be equally distributed over
                        to other questions. Total points remains unaffected.<br />
                        <br />
                    </div>
                    <div class="sak-banner-warn">
                        This action can not be undone!
                    </div>
                </div>
                <div class="modal-footer act">
                    <button type="button" class="active" data-dismiss="modal">
                        Reduce total points
                    </button>
                    <button type="button" class="button" data-dismiss="modal">
                        Equally distribute points
                    </button>
                    <button type="button" class="button" data-dismiss="modal">
                        Do not cancel question
                    </button>
                </div>
            </div>
        </div>
    </div>
`);

const cancelButton= document.getElementById("cancelButton");

cancelButton.addEventListener("click", (event) => {
    event.preventDefault()
    $("#cancelQuestionModal").modal();
});
