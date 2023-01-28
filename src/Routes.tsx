import { Route, Routes } from "react-router-dom";

import { Home } from "./views/Home";
import { SpeedLetters } from "./views/SpeedLetters";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="speed-letters" element={<SpeedLetters />} />
    </Routes>
  );
}
