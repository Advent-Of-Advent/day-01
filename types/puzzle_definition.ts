export type Puzzle = {
  day: number;
  create: PuzzleCreateInput;
  validate: PuzzleValidateAnswer[];
};

export type PuzzleCreateInput = (id: string) => string;
export type PuzzleValidateAnswer = (id: string, answer: string) => boolean;
