import { Children, useMemo } from 'react';
import { RxCrossCircled } from 'react-icons/rx'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import { takeRight } from 'lodash'

import classes from './ResultList.module.scss';
import { Guess } from '../../types';

type ResultListProps = {
  className?: string;
  prevGuesses: Array<Guess>;
}

export function ResultList({ className, prevGuesses }: ResultListProps) {
  const list = useMemo(() => takeRight(prevGuesses, 10), [prevGuesses]);
  
  return (
    <ul className={`${className} ${classes.resultList}`}>
      {Children.toArray(list.map(guess => (
        <li className={classes.resultListItem}>
          <span className={classes.resultListLetter}>{guess.letter} </span>
          {guess.success 
            ? <RiCheckboxCircleFill color="#5E5" size={30}/> 
            : <RxCrossCircled color="#E55" size={30}/>
          }
        </li>
      )))}
    </ul>
  );
}
