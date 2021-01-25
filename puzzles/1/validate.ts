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
