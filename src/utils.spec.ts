import { calculate, column } from "./utils";

describe("column", () => {
  it("builds an array of letters from point to point", () => {
    const xs = column("a", "e");
    expect(xs).toEqual(["a", "b", "c", "d", "e"]);
  });

  it("loops around the end of the alphabet", () => {
    const xs = column("q", "a");
    expect(xs).toEqual(["q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a"]);
  });

  it("handles the case where the letters are the same", () => {
    const xs = column("a", "a");
    expect(xs).toEqual(["a"]);
  });

  it("handles wildcard starts", () => {
    const xs = column(" ", "c");
    expect(xs).toEqual([" ", "a", "b", "c"]);
  });

  it("handles wildcard ends", () => {
    const xs = column("c", " ");
    expect(xs).toEqual(["c", " "]);
  });
});

describe("calculate", () => {
  it("builds a map of the word", () => {
    const map = calculate("foo", "bar");

    expect(map).toEqual([
      [
        "f",
        [
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
          "a",
          "b",
        ],
      ],
      ["o", ["o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a"]],
      ["o", ["o", "p", "q", "r"]],
    ]);
  });

  it("handles strings of different lengths", () => {
    const map = calculate("foo", "barbaz");

    expect(map).toEqual([
      [
        "f",
        [
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
          "a",
          "b",
        ],
      ],
      ["o", ["o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a"]],
      ["o", ["o", "p", "q", "r"]],
      [" ", [" ", "a", "b"]],
      [" ", [" ", "a"]],
      [
        " ",
        [
          " ",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
        ],
      ],
    ]);
  });

  it("handles spaces", () => {
    const map = calculate("something else", "else entirely");

    expect(map).toEqual([
      ["s", ["s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e"]],
      [
        "o",
        [
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
        ],
      ],
      ["m", ["m", "n", "o", "p", "q", "r", "s"]],
      ["e", ["e"]],
      ["t", ["t", " "]],
      [
        "h",
        [
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
          "a",
          "b",
          "c",
          "d",
          "e",
        ],
      ],
      ["i", ["i", "j", "k", "l", "m", "n"]],
      ["n", ["n", "o", "p", "q", "r", "s", "t"]],
      ["g", ["g", "h", "i"]],
      [
        " ",
        [
          " ",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
        ],
      ],
      ["e", ["e"]],
      ["l", ["l"]],
      ["s", ["s", "t", "u", "v", "w", "x", "y"]],
      ["e", ["e", " "]],
    ]);
  });

  it("handles edge case", () => {
    const map = calculate("it's.", "Here?");

    expect(map).toEqual([
      [
        "i",
        [
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
        ],
      ],
      ["t", ["t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e"]],
      [
        "s",
        [
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
        ],
      ],
      [" ", [" ", "a", "b", "c", "d", "e"]],
    ]);
  });
});
