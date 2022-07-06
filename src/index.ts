import { configure } from "queryparams";
import { calculate } from "./utils";

const {
  params: { start, end },
} = configure({ start: "dark", end: "mode" });

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

document.getElementById("Root")!.innerHTML = render(
  start.toLowerCase(),
  end.toLowerCase()
);
