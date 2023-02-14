/*
STUDENT FEEDBACK

Steps to reproduce:
1. Create an assessment with a few questions and activate feedback
2. Publish and take assessment as student
3. View feedback as student
4. Inject this JS code in browser console
*/

class Question {

    constructor(wrapperElement) {
        this._wrapper = wrapperElement;
        this._canceled = false;
    }

    cancel() {
        this._canceled = true;
        this._wrapper.style.opacity = 0.7;
        this.cancelAchievedScore();
        this.cancelMaxScore();
        this.addCancelBanner();
    }

    cancelAchievedScore() {
        const el = this._wrapper.querySelector(".adjustedScore");
        el.style.textDecoration = "line-through";
    }

    cancelMaxScore() {
        const el = this._wrapper
                .querySelector(".row.reviewAssessment .row .input-group:last-child");
        //el.style.textDecoration = "line-through";
        el.children[0].innerText = "0.0 Points";
    }

    addCancelBanner() {
        const bannerText = "This question has been cancelled and will "
                + "not affect the total score.";
        this._wrapper.querySelector(".samigo-question-callout")
                .insertAdjacentHTML("beforeend",`
            <div class="sak-banner-info cancelled-question-info">
                ${bannerText}
            </div>
        `);
    }

}

const questionElements = document.querySelectorAll(".tier2 tbody > tr");

const questions = Array.from(questionElements).map(
        (wrapperElement) => new Question(wrapperElement));

questions[0].cancel();

document.querySelector(".part-header .badge").innerText = "1.0 / 1.0 Points";
