import { ReactNode } from "react";

import { Countdown } from "./Countdown";
import classes from './Skeleton.module.scss';

type BodyProps = {
  isCountingdown: boolean;
  handleStartCountdown: () => void;
  handleStartGame: () => void;
  gameStarted: boolean;
  setGameStarted: (val: boolean) => void;
  showResult: boolean;
  Result: ReactNode;
  children: ReactNode;
}

export function Body(props: BodyProps) {
  const { isCountingdown, handleStartCountdown, handleStartGame, gameStarted, showResult, Result, children } = props;

  if (showResult) return <>{Result}</>;
  if (gameStarted) return <>{children}</>;
  if (isCountingdown) {
    return <Countdown handleStart={handleStartGame} />
  }

  return (
    <button
      className={classes.startBtn}
      onClick={handleStartCountdown}
    >
      Start
    </button>
  );
}