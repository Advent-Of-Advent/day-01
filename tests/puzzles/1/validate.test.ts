import fs from "fs";
import { create } from "puzzles/1/create";
import {
  validatePart1,
  validatePart2,
  validateFromTextPart1,
  validateFromTextPart2,
} from "puzzles/1/validate";

describe("Day 1 - Validate part 1", () => {
  it("validates part 1", () => {
    expect(validatePart1("1", "801076")).toEqual(true);
    expect(validatePart1("2", "836916")).toEqual(true);
    expect(validatePart1("1", "0")).toEqual(false);
  });

  it("works on baseline AoC input", async () => {
    const baseline = await fs.promises.readFile(`${process.cwd()}/puzzles/1/baseline.txt`, "utf8");
    expect(validateFromTextPart1(baseline, "1007104")).toEqual(true);
    expect(validateFromTextPart1(create("1"), "801076")).toEqual(true);
  });
});

describe("Day 1 - Validate part 2", () => {
  it("validates part 2", () => {
    expect(validatePart2("1", "137888730")).toEqual(true);
    expect(validatePart2("2", "239754944")).toEqual(true);
    expect(validatePart2("1", "0")).toEqual(false);
  });

  it("works on baseline AoC input", async () => {
    const baseline = await fs.promises.readFile(`${process.cwd()}/puzzles/1/baseline.txt`, "utf8");
    expect(validateFromTextPart2(baseline, "18847752")).toEqual(true);
    expect(validateFromTextPart2(create("1"), "137888730")).toEqual(true);
  });
});
