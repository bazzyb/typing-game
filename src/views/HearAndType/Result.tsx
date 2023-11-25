import classes from './HearAndType.module.scss';

type ResultProps = {
  score: number;
}

export function HearAndTypeResult({ score }: ResultProps) {
  return (
    <>
      <div className={classes.resultTitles}>
        <h1>Final Score: {score}</h1>
      </div>
    </>
  );
}
