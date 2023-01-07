/* eslint-disable no-undef */
import "p5";
import { SKETCH_SIZE } from "./constants";
import { insertWord } from "./functions";
import { sortByTextLength, generateField } from "./utils";
import { data } from "./words";

const words = sortByTextLength(data);
const field = generateField(words);

window.setup = () => {
  createCanvas(SKETCH_SIZE, SKETCH_SIZE);
  insertWord({ field: field, x: 10, y: 0, word: "aa", method: "RIGHT" });
  console.table(field);
};

window.draw = () => {
  background(40, 40, 40);
  // ellipse(x, height / 2, 20);
  // if (x > width) x = 0;
  // x++;
};
