import { useEffect, useState } from "react";

export function useCountdown(
  handleStart: () => void,
) {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    function updateCountdown() {
      setCountdown(val => {
        if (val === 1) {
          handleStart();
          return val;
        }
        return val -= 1
      });
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    return () => clearInterval(countdownInterval);
  }, [])

  return countdown;
}