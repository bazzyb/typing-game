import { BrowserRouter, RouterProvider } from 'react-router-dom';

import { Header } from './layout/Header';
import { Router } from './Routes';
import classes from './App.module.scss';

export function App() {
  return (
    <div className={classes.app}>
      <BrowserRouter>
        <Header />
        <main className={classes.main}>
          <Router />
        </main>
      </BrowserRouter>
    </div>
  );
}
