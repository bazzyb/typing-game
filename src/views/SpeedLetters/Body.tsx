import { LetterBlock } from '@/components/LetterBlock';
import { ResultList } from '@/components/ResultList';
import { useKeyPress } from '@/hooks/useLetterKeyPress';
import { Guess } from '@/types';
import classes from './SpeedLetters.module.scss';

type SpeedLettersBodyProps = {
  letter: string;
  prevGuesses: Array<Guess>;
  handleKeyPress: (key: string) => void;
}

export function SpeedLettersBody(props: SpeedLettersBodyProps) {
  const { letter, prevGuesses, handleKeyPress } = props;

  useKeyPress(handleKeyPress);

  return (
    <div className={classes.speedLettersBody}>
      <LetterBlock>{letter}</LetterBlock>
      <ResultList className={classes.prevGuesses} prevGuesses={prevGuesses} />
    </div>
  );
}
