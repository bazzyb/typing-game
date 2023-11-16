import { useEffect, useRef, useState } from "react";

export function useGameTimer(
  gameTime: number | undefined,
  onComplete: () => void,
) {
  const [time, setTime] = useState(gameTime || 30);
  const intervalUpdater = useRef<NodeJS.Timer | null>(null);

  function clearTimerInterval() {
    if (intervalUpdater.current) {
      clearInterval(intervalUpdater.current);
      intervalUpdater.current = null;
    }
  }

  function resetTimer() {
    setTime(gameTime || 30);
    clearTimerInterval();
  }

  function updateGameTimer() {
    setTime(oldTime => {
      if (oldTime > 0) {
        return oldTime -= 1;
      }
      clearTimerInterval();
      onComplete();
      return oldTime;
    });
  }

  function startTimer() {
    const timer = setInterval(updateGameTimer, 1000);
    intervalUpdater.current = timer;
  }

  useEffect(() => {
    return () => {
      clearTimerInterval();
    }
  }, [])

  return { time, startTimer, resetTimer };
}