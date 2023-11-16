import { useRef, useState } from 'react';

import { Start } from '@/components/Start';
import { LETTERS } from '@/consts';
import { Guess } from '@/types';
import { SpeedLettersResult } from './Result';
import { SpeedLettersBody } from './Body';

function pickLetter() {
  const randNum = Math.floor(Math.random() * 26);
  return LETTERS[randNum];
}

export function SpeedLetters() {
  const [prevGuesses, setPrevGuesses] = useState<Array<Guess>>([]);
  const [score, setScore] = useState(0);
  const [letter, setLetter] = useState(() => pickLetter());

  const reffedLetter = useRef(letter);

  function resetGuesses() {
    setPrevGuesses([]);
  }

  function updateGuesses(guess: Guess) {
    setPrevGuesses(g => [...g, guess]);
  }

  function correctGuess() {
    updateGuesses({ 
      letter: reffedLetter.current,
      success: true,
    })
    setScore(s => s + 1);
  }

  function incorrectGuess() {
    updateGuesses({ 
      letter: reffedLetter.current,
      success: false,
    });
  }

  function handleReset() {
    const newLetter = pickLetter();
    setLetter(newLetter);
    resetGuesses();
    setScore(0);
  }

  function handleKeyPress(key: string) {
    if (key === reffedLetter.current) {
      correctGuess();
    } else {
      incorrectGuess();
    }
    const newLetter = pickLetter();
    setLetter(newLetter);
    reffedLetter.current = newLetter;
  }

  return (
    <Start
      title="Typing Game"
      score={score}
      handleReset={handleReset}
      Result={(
        <SpeedLettersResult
          score={score}
          prevGuesses={prevGuesses}
        />
      )}
    >
      <SpeedLettersBody
        letter={reffedLetter.current}
        prevGuesses={prevGuesses}
        handleKeyPress={handleKeyPress}
      />
    </Start>
  );
}
