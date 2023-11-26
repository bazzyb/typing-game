import { useState } from 'react';

import { GameSkeleton } from '@/components/Skeleton';
import { HearAndTypeResult } from './Result';
import { HearAndTypeBody } from './Body';

export function HearAndType() {
  const [score, setScore] = useState(0);

  function handleReset() {
    setScore(0);
  }

  return (
    <GameSkeleton
      title="Hear And Type"
      score={score}
      handleReset={handleReset}
      Result={<HearAndTypeResult score={score} />}
    >
      <HearAndTypeBody />
    </GameSkeleton>
  );
}
