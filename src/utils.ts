import { InsertWordProps } from "./type";

/** 長い文字数から短い文字数の順に並び替える */
export function sortByTextLength(data) {
  return data.sort((n1, n2) => {
    if (n1.length > n2.length) return -1;
    if (n1.length < n2.length) return 1;
    return 0;
  });
}

/** データから最小サイズのフィールドを計算し、正方形のフィールドを生成する */
export function generateField(words): Array<Array<string>> {
  let wordCount = 0;
  for (const item of words) {
    wordCount += item.length;
  }

  let squareField = [];
  let fieldSize = Math.round(Math.sqrt(wordCount));
  for (let x = 0; x < fieldSize; x++) {
    squareField.push([]);
    for (let y = 0; y < fieldSize; y++) {
      squareField[x].push("");
    }
  }
  return squareField;
}

/** 指定の単語とメソッドがフィールド内に挿入できるかを判定する */
export function isInField({ field, x, y, word, method }: InsertWordProps) {
  let result = {
    isOk: true,
    text: `挿入に成功しました`
  };
  const POSITION_NOTFOUND = `引数の挿入座標がフィールドの範囲内にありません: fieldSize=${field.length}x${field.length}, targetPos=${x}x${y}`;
  const CANNOT_SPECIFY_INSERT_METHOD = `指定のメソッドでフィールド内に挿入することができません: method:${method}`;

  function setError(text) {
    result.isOk = false;
    result.text = text;
    console.error(text);
  }

  const fieldLength = field.length;
  const wordLength = word.length;

  // 挿入する座標がフィールドの範囲を超えてたら無視する
  if (x > fieldLength || y > fieldLength) setError(POSITION_NOTFOUND);
  // 挿入する単語を指定のメソッドでそもそも挿入できなかったら無視する
  if (x + wordLength > fieldLength && method === "RIGHT")
    setError(CANNOT_SPECIFY_INSERT_METHOD);
  if (y + wordLength > fieldLength && method === "DOWN")
    setError(CANNOT_SPECIFY_INSERT_METHOD);

  return result;
}
