/**
 * 指定箇所に文字を挿入する
 * @param x
 * @param y
 * @param word
 */
export type InsertWordProps = {
  // 挿入したいフィールド
  field: Array<Array<string>>;
  // 挿入したい箇所のX座標
  x: number;
  // 挿入したい箇所のY座標
  y: number;
  // 挿入したい文字列　ex.こんにちは
  word: string;
  // 挿入方法 指定のない場合はどちらかで挿入
  method?: "DOWN" | "RIGHT";
};
