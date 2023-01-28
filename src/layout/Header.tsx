import { Link } from 'react-router-dom';
import { IoIosHome } from 'react-icons/io'

import classes from './Header.module.scss';

export function Header() {
  return (
    <header className={classes.header}>
      <h1>Games Hub</h1>
      <ul>
        <Link to="/" className={classes.homeLink}>
          <IoIosHome title='Home' size={32} />
        </Link>
      </ul>
    </header>
  );
}
