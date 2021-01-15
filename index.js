window.addEventListener("load", () => {
  const userState = window.state || {
    starCount: [],
  };

  const container = document.getElementById("link_rows");
  const linkRowTemplate = document.getElementById("link_row_template").content;

  window.puzzles.forEach((puzzle, idx) => {
    const clone = linkRowTemplate.firstElementChild.cloneNode(true);

    const link = clone.querySelector(".row_link a");
    link.setAttribute("href", `/day/${idx + 1}`);
    link.textContent = (idx + 1).toString();

    const stars = clone.querySelector(".row_stars");
    stars.textContent = "*".repeat(userState.starCount[idx] || 0);

    container.appendChild(clone);
  });
});
