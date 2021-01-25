import React, { FormEventHandler } from "react";
import puzzles from "puzzles";

const ID = "123456789";

const Route = () => {
  const [stars, setStars] = React.useState(0);
  const [inputText, setInputText] = React.useState("");
  const [incorrect, setIncorrect] = React.useState(false);
  const puzzle = puzzles[0];

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (puzzle.validate[stars](ID, inputText)) {
      setIncorrect(false);
      setStars((stars) => stars + 1);
    } else {
      setIncorrect(true);
    }
  };

  return (
    <div>
      {stars === 0 && (
        <p>
          Find the two numbers in your{" "}
          <a href="/input" target="_blank">
            puzzle input
          </a>{" "}
          that sum to 2020. What do you get when you multiply them together?
        </p>
      )}
      {stars === 1 && (
        <>
          <p>Part 1 is correct!</p>
          <p>
            Find the THREE numbers in your{" "}
            <a href="/input" target="_blank">
              puzzle input
            </a>{" "}
            that sum to 2020. What do you get when you multiply them all together?
          </p>
        </>
      )}
      {stars < 2 && (
        <>
          <form onSubmit={handleSubmit}>
            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
            <button>Submit</button>
          </form>
          {incorrect && <p>That answer is incorrect, try again.</p>}
        </>
      )}
      {stars === 2 && <p>Both parts are correct, well done!</p>}
    </div>
  );
};

export default Route;
