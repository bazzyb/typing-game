import { useGameTimer } from '@/hooks/useGameTimer';
import { ReactNode, useState } from 'react';

import { StartBody } from './Body';
import { GameHeader } from './GameHeader';
import classes from './Start.module.scss';

type StartProps = {
  title: string;
  score: number;
  Result: ReactNode;
  handleReset: () => void;
  gameTime?: number;
  children: ReactNode;
}

export function Start(props: StartProps) {
  const { title, score, gameTime, handleReset, Result, children } = props;

  const [isCountingdown, setIsCountingdown] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const timer = useGameTimer(gameTime, () => {
    setShowResult(true);
  });
 
  function handleStartCountdown() {
    setIsCountingdown(true);
  }

  function handleStartGame() {
    setGameStarted(true);
    setIsCountingdown(false);
    timer.startTimer();
  }

  function handleGameReset(toCountdown = false) {
    handleReset();
    timer.resetTimer();
    setGameStarted(false); 
    setShowResult(false);
    setIsCountingdown(toCountdown);
  }

  function handleGameRestart() {
    handleGameReset(true);
  }

  function handleGameExit() {
    handleGameReset(false);
  }

  return (
    <div className={classes.start}>
      <GameHeader
        title={title}
        score={score}
        time={timer.time}
        handleRestart={handleGameRestart}
        handleExit={handleGameExit}
      />
      <div className={classes.startBody}>
        <StartBody
          handleStartCountdown={handleStartCountdown}
          isCountingdown={isCountingdown}
          handleStartGame={handleStartGame}
          gameStarted={gameStarted}
          setGameStarted={setGameStarted}
          showResult={showResult}
          Result={Result}
        >
          {children}
        </StartBody>
      </div>
    </div>
  )
}
