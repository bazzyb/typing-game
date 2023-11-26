import { VscDebugRestart } from 'react-icons/vsc';
import { MdExitToApp } from 'react-icons/md';

import { Stats } from './Stats';
import classes from './Skeleton.module.scss';

type GameHeaderProps = {
  title: string;
  score: number;
  time: number;
  handleRestart: () => void;
  handleExit: () => void;
};

export function GameHeader(props: GameHeaderProps) {
  const { title, score, time, handleRestart, handleExit } = props;

  return (
    <div className={classes.gameHeader}>
      <Stats score={score} time={time} />
      <h1>{title}</h1>
      <div className={classes.gameHeaderButtons}>
        <button title="Restart Game" className={classes.actionIcon} onClick={handleRestart}>
          <VscDebugRestart size={24} />
        </button>
        <button title="Exit Game" className={classes.actionIcon} onClick={handleExit}>
          <MdExitToApp size={24} />
        </button>
      </div>
    </div>
  );
}
