import { useEffect } from "react";
import { LETTERS } from "../consts";

export function useKeyPress(
  handleKeyDown: (e: string) => void,
) {
  function handler(e: KeyboardEvent) {
    const capitalisedKey = e.key.toUpperCase();
    if (LETTERS.includes(capitalisedKey)) {
      handleKeyDown(capitalisedKey);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, []);
}
