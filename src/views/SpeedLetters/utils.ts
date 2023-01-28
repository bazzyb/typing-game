import { LETTERS } from "@/consts";

export function pickLetter() {
  const randNum = Math.floor(Math.random() * 26);
  return LETTERS[randNum];
}