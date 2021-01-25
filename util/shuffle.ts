export const shuffle = <T>(rng: seedrandom.prng, arr: T[]): T[] => {
  const out = [];
  while (arr.length > 0) {
    const selectedIndex = Math.floor(rng() * arr.length);
    out.push(arr[selectedIndex]);
    arr = arr.slice(0, selectedIndex).concat(arr.slice(selectedIndex + 1));
  }

  return out;
};
