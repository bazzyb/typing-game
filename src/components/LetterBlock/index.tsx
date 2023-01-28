import { ReactNode } from "react";

import classes from './LetterBlock.module.scss';

type LetterBlockTypes = {
  children: ReactNode;
}

export function LetterBlock({ children }: LetterBlockTypes) {
  return (
    <div className={classes.letterBlock}>
      {children}
    </div>
  );
}
