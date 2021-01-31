import { PuzzleValidateAnswer } from "types/puzzle_definition";
import { unshuffled } from "./create";

export const validatePart1: PuzzleValidateAnswer = (id, answer) => {
  const input = unshuffled(id);
  return answer === (input[0] * input[1]).toString();
};

export const validatePart2: PuzzleValidateAnswer = (id, answer) => {
  const input = unshuffled(id);
  return answer === (input[2] * input[3] * input[4]).toString();
};

export const validateFromTextPart1: PuzzleValidateAnswer = (text, answer) => {
  const lines = text.split("\n");
  const numbers = lines.map(Number).sort((a, b) => a - b);

  for (let a = 0; a < numbers.length; a++) {
    let first = numbers[a];
    for (let b = a + 1; b < numbers.length; b++) {
      let second = numbers[b];

      if (first + second === 2020) {
        return (first * second).toString() === answer;
      }

      if (first + second > 2020) {
        break;
      }
    }
  }

  return false;
};

export const validateFromTextPart2: PuzzleValidateAnswer = (text, answer) => {
  const lines = text.split("\n");
  const numbers = lines.map(Number).sort((a, b) => a - b);

  for (let a = 0; a < numbers.length; a++) {
    let first = numbers[a];
    for (let b = a + 1; b < numbers.length; b++) {
      let second = numbers[b];

      if (first + second > 2020) {
        break;
      }
      for (let c = b + 1; c < numbers.length; c++) {
        let third = numbers[c];

        if (first + second + third === 2020) {
          return (first * second * third).toString() === answer;
        }

        if (first + second + third > 2020) {
          break;
        }
      }
    }
  }

  return false;
};
