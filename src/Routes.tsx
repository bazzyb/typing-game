import { Route, Routes } from "react-router-dom";

import { Home } from "./views/Home";
import { SpeedLetters } from "./views/SpeedLetters";
import { HearAndType } from "./views/HearAndType";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="speed-letters" element={<SpeedLetters />} />
      <Route path="hear-and-type" element={<HearAndType />} />
    </Routes>
  );
}
