import { InsertWordProps } from "./type";
import { isInField } from "./utils";

export function insertWord({
  field,
  x,
  y,
  word,
  method = "DOWN"
}: InsertWordProps): boolean {
  const checkField = isInField({ field, x, y, word, method });
  if (!checkField.isOk) return false;

  if (method === "DOWN") {
    for (let i = 0; i < word.length; i++) {
      field[x][y + i] = word[i];
    }
  }
  if (method === "RIGHT") {
    for (let i = 0; i < word.length; i++) {
      field[x + i][y] = word[i];
    }
  }
  return true;
}
