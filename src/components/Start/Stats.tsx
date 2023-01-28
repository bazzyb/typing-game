import classes from './Start.module.scss';

type GameHeaderProps = {
  score: number;
  time: number;
}

export function Stats({ time, score }: GameHeaderProps) {
  return (
    <div className={classes.gameHeaderScore}>
      <p>Score: <strong>{score}</strong></p>
      <p>Time: <strong>{time}</strong></p>
    </div>
  );
}
