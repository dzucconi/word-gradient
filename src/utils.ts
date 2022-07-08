export const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");

export const column = (a: string, b: string, letters = [a]) => {
  if (a.length !== 1 || b.length !== 1) {
    throw new Error("letters must be single characters");
  }

  if (b === " ") {
    return [a, b];
  }

  if (letters[letters.length - 1] === b) {
    return letters;
  }

  return column(a, b, [
    ...letters,
    ALPHABET[
      (ALPHABET.indexOf(letters[letters.length - 1]) + 1) % ALPHABET.length
    ],
  ]);
};

export const calculate = (start: string, end: string) => {
  [start, end] = [start, end].map((x) =>
    x.toLowerCase().replace(/[\p{P}$+<=>^`|~]/gu, "")
  );

  if (start.length !== end.length) {
    const longest = Math.max(start.length, end.length);

    [start, end] = [start, end].map((x) =>
      x.padEnd(longest, " ").replace(/\s/g, " ")
    );
  }

  return start.split("").map((letter, i) => {
    return [letter, column(letter, end[i])];
  });
};
