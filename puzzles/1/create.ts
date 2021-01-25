import seedrandom from "seedrandom";
import { PuzzleCreateInput } from "types/puzzle_definition";
import { shuffle } from "util/shuffle";

const TARGET = 2020;

const generatePair = (rng: seedrandom.prng, target: number): number[] => {
  const a = Math.ceil(rng() * (target - 10));
  const b = target - a;
  return [a, b];
};

export const create: PuzzleCreateInput = (id) => {
  const rng = seedrandom(id);
  const values = unshuffled(id, rng);
  return shuffle(rng, values).join("\n");
};

export const unshuffled = (id: string, rng = seedrandom(id)): number[] => {
  const numbers = new Set<number>();
  const combinationHashes = new Set<number>();

  // Create initial pair
  while (true) {
    const [a, b] = generatePair(rng, TARGET);
    if (a !== b) {
      numbers.add(a);
      numbers.add(b);
      combinationHashes.add(a + b);
      break;
    }
  }

  // Create part 2 triad
  while (true) {
    const a = Math.ceil((rng() * 2 * TARGET) / 3);
    if (numbers.has(a)) {
      continue;
    }

    const [b, c] = generatePair(rng, TARGET - a);
    if (numbers.has(b) || numbers.has(c)) {
      continue;
    }

    numbers.forEach((number) => {
      [a, b, c].forEach((x) => combinationHashes.add(x + number));
    });
    [a, b, c].forEach((x) => numbers.add(x));
    break;
  }

  // Create remaining numbers
  while (numbers.size < 200) {
    // Generate candidate
    const candidate = Math.ceil(rng() * TARGET);

    // Reject if it's already in the list
    if (numbers.has(candidate)) {
      continue;
    }

    // Reject if (TARGET - candidate) is already in the list
    if (numbers.has(TARGET - candidate)) {
      continue;
    }

    // Reject if (TARGET - candidate) is already in the hashes list
    if (combinationHashes.has(TARGET - candidate)) {
      continue;
    }

    // Add all candidate + number list combinations to combination hashes
    numbers.forEach((number) => combinationHashes.add(number + candidate));
    // Add candidate to number list
    numbers.add(candidate);
  }

  return [...numbers.keys()];
};
