import { Link } from 'react-router-dom';

import classes from './Home.module.scss';

export function Home() {
  return (
    <div className={classes.home}>
      <Link to="/speed-letters">
        Speed Letters
      </Link>
    </div>
  );
}
