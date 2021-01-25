import { Puzzle } from "types/puzzle_definition";
import { create } from "./create";
import { validatePart1, validatePart2 } from "./validate";

const puzzle: Puzzle = {
  day: 1,
  create,
  validate: [validatePart1, validatePart2],
};

export default puzzle;
