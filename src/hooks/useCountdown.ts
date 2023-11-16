import { useEffect, useState } from "react";

export function useCountdown(
  handleStart: () => void,
) {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    function updateCountdown() {
      setCountdown(val => {
        return val -= 1
      });
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    return () => {
      if (countdown) {
        clearInterval(countdownInterval);
      }
    }
  }, [])

  useEffect(() => {
    if (countdown === 0) {
      handleStart();
    }
  }, [countdown])

  return countdown;
}