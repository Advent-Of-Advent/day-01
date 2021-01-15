window.addEventListener("load", () => {
  const container = document.getElementById("puzzle_input_text");
  container.textContent = window.puzzles[window.puzzleIndex].input;
});
