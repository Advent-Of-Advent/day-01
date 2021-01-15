window.addEventListener("load", () => {
  console.log("loading answer");
  const answers = window.puzzles[window.puzzleIndex].answers;
  const state = window.state;

  if (!state.submittedAnswer) {
    location.href = `/day/${window.puzzleIndex + 1}`;
  }

  const main = document.querySelector("main");

  if (answers[state.submittedStep] === state.submittedAnswer.toString()) {
    window.saveUserState({
      starCount: state.starCount.map((stars, idx) => {
        return idx === window.puzzleIndex ? stars + 1 : stars;
      }),
      submittedAnswer: null,
      submittedStep: null,
    });

    main.setAttribute("data-correct", "correct");
    main.setAttribute("data-stars", window.state.starCount[window.puzzleIndex]);
  } else {
    const codeElement = document.getElementById("incorrect_answer");
    codeElement.textContent = state.submittedAnswer;

    window.saveUserState({
      ...state,
      submittedAnswer: null,
      submittedStep: null,
    });

    main.setAttribute("data-correct", "incorrect");
  }
});
