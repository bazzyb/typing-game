import { round } from 'lodash';
import { Guess } from '../../types';
import { ResultList } from '@/components/ResultList';
import classes from './SpeedLetters.module.scss';

type ResultProps = {
  score: number;
  prevGuesses: Array<Guess>;
};

function calculateSuccessPercentage(prevGuesses: Array<Guess>) {
  const [count, correctGuesses] = prevGuesses.reduce(
    (acc, guess) => {
      const newCount = acc[0] + 1;
      const newCorrectGuesses = guess.success ? acc[1] + 1 : acc[1];
      return [newCount, newCorrectGuesses];
    },
    [0, 0],
  );

  return round(correctGuesses / count, 4) * 100;
}

export function SpeedLettersResult({ score, prevGuesses }: ResultProps) {
  return (
    <>
      <div className={classes.resultTitles}>
        <h1>Final Score: {score}</h1>
        <h2>Hit Rate: {calculateSuccessPercentage(prevGuesses)}%</h2>
      </div>
      <ResultList className={classes.prevGuessesResult} prevGuesses={prevGuesses} length={0} />
    </>
  );
}
