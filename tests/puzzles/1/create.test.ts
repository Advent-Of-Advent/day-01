import { create, unshuffled } from "puzzles/1/create";

const TARGET = 2020;

const pairCount = (numbers: number[]): number => {
  let count = 0;
  const sorted = [...numbers].sort((a, b) => a - b);

  for (let a = 0; a < sorted.length; a++) {
    const first = sorted[a];
    for (let b = a + 1; b < sorted.length; b++) {
      const second = sorted[b];

      if (first + second === TARGET) {
        count += 1;
      }

      if (first + second > TARGET) {
        break;
      }
    }
  }

  return count;
};

const setCount = (numbers: number[]): number => {
  let count = 0;
  const sorted = [...numbers].sort((a, b) => a - b);

  for (let a = 0; a < sorted.length; a++) {
    const first = sorted[a];
    for (let b = a + 1; b < sorted.length; b++) {
      const second = sorted[b];

      if (first + second >= TARGET) {
        break;
      }

      for (let c = b + 1; c < sorted.length; c++) {
        const third = sorted[c];

        if (first + second + third === TARGET) {
          count += 1;
        }

        if (first + second + third > TARGET) {
          break;
        }
      }
    }
  }

  return count;
};

describe("Day 1 - Create input", () => {
  it("creates predictable input", () => {
    expect(create("1")).toEqual(create("1"));
    expect(create("1")).not.toEqual(create("2"));
  });

  it("creates predictable unshuffled raw data", () => {
    expect(unshuffled("1")).toEqual(unshuffled("1"));
    expect(unshuffled("1")).not.toEqual(unshuffled("2"));
  });

  it("only has one pair of numbers summing to 2020", () => {
    const randomTestSeed = Math.floor(Math.random() * 1e10).toString();

    expect(pairCount(unshuffled("1"))).toEqual(1);
    expect(pairCount(unshuffled("2"))).toEqual(1);
    expect(pairCount(unshuffled(randomTestSeed))).toEqual(1);

    // Test the test fixture
    expect(pairCount([10, 2010, 20, 2000, 5, 15])).toEqual(2);
    expect(pairCount([30, 2010, 40, 2000])).toEqual(0);
  });

  it("only has one set of numbers summing to 2020", () => {
    const randomTestSeed = Math.floor(Math.random() * 1e10).toString();

    expect(setCount(unshuffled("1"))).toEqual(1);
    expect(setCount(unshuffled("2"))).toEqual(1);
    expect(setCount(unshuffled(randomTestSeed))).toEqual(1);

    // Test the test fixture
    expect(setCount([10, 1990, 20, 2000, 5, 15])).toEqual(2);
    expect(setCount([30, 2010, 40, 2000])).toEqual(0);
  });
});
