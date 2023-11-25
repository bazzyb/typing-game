import { useGameTimer } from '@/hooks/useGameTimer';
import { ReactNode, useState } from 'react';

import { Body } from './Body';
import { GameHeader } from './GameHeader';
import classes from './Skeleton.module.scss';

type SkeletonProps = {
  title: string;
  score: number;
  Result: ReactNode;
  handleReset: () => void;
  gameTime?: number;
  children: ReactNode;
}

export function GameSkeleton(props: SkeletonProps) {
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
    setShowResult(true);
  }

  return (
    <div className={classes.skeleton}>
      <GameHeader
        title={title}
        score={score}
        time={timer.time}
        handleRestart={handleGameRestart}
        handleExit={handleGameExit}
      />
      <div className={classes.skeletonBody}>
        <Body
          handleStartCountdown={handleStartCountdown}
          isCountingdown={isCountingdown}
          handleStartGame={handleStartGame}
          gameStarted={gameStarted}
          setGameStarted={setGameStarted}
          showResult={showResult}
          Result={Result}
        >
          {children}
        </Body>
      </div>
    </div>
  )
}
