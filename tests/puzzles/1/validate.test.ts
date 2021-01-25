import { validatePart1, validatePart2 } from "puzzles/1/validate";

describe("Day 1 - Validate part 1", () => {
  it("validates part 1", () => {
    expect(validatePart1("1", "801076")).toEqual(true);
    expect(validatePart1("2", "836916")).toEqual(true);
    expect(validatePart1("1", "0")).toEqual(false);
  });
});

describe("Day 1 - Validate part 2", () => {
  it("validates part 2", () => {
    expect(validatePart2("1", "137888730")).toEqual(true);
    expect(validatePart2("2", "239754944")).toEqual(true);
    expect(validatePart2("1", "0")).toEqual(false);
  });
});
