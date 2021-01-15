const addAnswerDiv = (part, answerText) => {
  const puzzleAnswerTemplate = document.getElementById("puzzle_answer").content;

  const answerDiv = puzzleAnswerTemplate.firstElementChild.cloneNode(true);
  answerDiv.querySelector("code").textContent = answerText;

  const slot = document.getElementById(part === 1 ? "puzzle_part1_answer" : "puzzle_part2_answer");
  slot.appendChild(answerDiv);
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const inputElement = document.getElementById("puzzle_form_textbox");

  window.saveUserState({
    ...window.state,
    submittedAnswer: inputElement.value,
    submittedStep: state.starCount[window.puzzleIndex],
  });

  location.href = `/day/${window.puzzleIndex + 1}/answer`;
};

window.addEventListener("load", () => {
  console.log("loading puzzle");
  const starCount = window.state.starCount[window.puzzleIndex];
  const answers = window.puzzles[window.puzzleIndex].answers;

  const main = document.querySelector("main");
  main.setAttribute("data-stars", starCount);

  if (starCount > 0) {
    addAnswerDiv(1, answers[0]);
  }

  if (starCount > 1) {
    addAnswerDiv(2, answers[1]);
  }

  const form = document.getElementById("puzzle_form");
  form.addEventListener("submit", onFormSubmit);
});
