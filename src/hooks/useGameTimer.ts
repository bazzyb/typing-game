import { useEffect, useState } from "react";

export function useGameTimer(
  gameTime: number | undefined,
  onComplete: () => void,
) {
  const [time, setTime] = useState(gameTime || 30);
  const [gameStarted, setGameStarted] = useState(false);

  function startTimer() {
    setGameStarted(true);
  }

  function resetTimer() {
    setTime(gameTime || 30);
  }

  useEffect(() => {
    let intervalUpdater: NodeJS.Timer;

    function updateGameTimer() {
      setTime(oldTime => {
        if (oldTime > 0) {
          return oldTime -= 1;
        }
        clearInterval(intervalUpdater);
        onComplete();
        return oldTime;
      });
    }

    if (gameStarted) {
      intervalUpdater = setInterval(updateGameTimer, 1000);
    }
    return () => clearInterval(intervalUpdater);
  }, [gameStarted, setTime])

  return { time, startTimer, resetTimer }
}