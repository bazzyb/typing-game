import { VscDebugRestart } from 'react-icons/vsc';

import { Stats } from './Stats';
import classes from './Start.module.scss';

type GameHeaderProps = {
  title: string;
  score: number;
  time: number;
  handleRestart: () => void;
}

export function GameHeader({ title, score, time, handleRestart }: GameHeaderProps) {
  return (
    <div className={classes.gameHeader}>
      <Stats score={score} time={time}/>
      <h1>{title}</h1>
      <button className={classes.restart} onClick={handleRestart}>
        <VscDebugRestart size={24} />
      </button>
    </div>
  );
}
