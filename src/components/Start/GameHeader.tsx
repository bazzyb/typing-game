import { VscDebugRestart } from 'react-icons/vsc';
import { ImExit } from 'react-icons/im';

import { Stats } from './Stats';
import classes from './Start.module.scss';

type GameHeaderProps = {
  title: string;
  score: number;
  time: number;
  handleRestart: () => void;
  handleExit: () => void;
}

export function GameHeader(props: GameHeaderProps) {
  const { title, score, time, handleRestart, handleExit } = props;

  return (
    <div className={classes.gameHeader}>
      <Stats score={score} time={time}/>
      <h1>{title}</h1>
      <button className={classes.actionIcon} onClick={handleRestart}>
        <VscDebugRestart size={24} />
      </button>
      <button className={classes.actionIcon} onClick={handleExit}>
        <ImExit size={24} />
      </button>
    </div>
  );
}
