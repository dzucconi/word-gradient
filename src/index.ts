import { configure } from "queryparams";
import { calculate } from "./utils";

const {
  params: { input },
} = configure({
  input:
    "The room is full of fear. With empty wavelength touch. It's coming in a rush.",
});

const render = (start: string, end: string) => {
  const data = calculate(start, end);
  const longest = Math.max(...data.map(([_, xs]) => xs.length));

  const path = [...new Array(longest)].map((_, i) => {
    return data
      .map(([_letter, column]) => {
        return column[i] ?? column[column.length - 1];
      })
      .join("");
  });

  return `<div class="Path">${path.join("<br />")}</div>`;
};

const words = input.split(" ");

document.getElementById("Root")!.innerHTML = words
  .map((current, i) => {
    const next = words[i + 1];
    if (!next) return "";
    return render(current, next);
  })
  .join("");
