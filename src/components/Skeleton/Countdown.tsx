import { useCountdown } from '@/hooks/useCountdown';

type LetterBlockTypes = {
  handleStart: () => void;
};

export function Countdown({ handleStart }: LetterBlockTypes) {
  const countdown = useCountdown(handleStart);

  return (
    <div>
      <h1>{countdown}</h1>
    </div>
  );
}
