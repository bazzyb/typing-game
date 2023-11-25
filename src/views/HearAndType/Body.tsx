import { useTTS } from '@/hooks/useTTS';
import classes from './HearAndType.module.scss';
import { easyWords } from './words/easy';
import { useState } from 'react';

function getRandomWord() {
  return easyWords[Math.floor(Math.random() * easyWords.length)]
}

export function HearAndTypeBody() {
  const { playAudio } = useTTS();

  const [currentWord, setCurrentWord] = useState(() => getRandomWord());

  function changeWord() {
    setCurrentWord(getRandomWord());
  }

  return (
    <div className={classes.hearAndTypeBody}>
      <h1>{currentWord}</h1>
      <button onClick={() => playAudio(currentWord)}>Play Audio</button>
      <button onClick={changeWord}>Change Word</button>
    </div>
  );
}
