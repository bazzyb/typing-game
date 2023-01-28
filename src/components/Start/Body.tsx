import { ReactNode } from "react";

import { Countdown } from "./Countdown";
import classes from './Start.module.scss';

type StartBodyProps = {
  isCountingdown: boolean;
  handleStartCountdown: () => void;
  handleStartGame: () => void;
  gameStarted: boolean;
  setGameStarted: (val: boolean) => void;
  showResult: boolean;
  Result: ReactNode;
  children: ReactNode;
}

export function StartBody(props: StartBodyProps) {
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