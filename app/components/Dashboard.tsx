'use client';

import { useEffect, useState } from 'react';
import IterationCard from './IterationCard';

type IterationAnswer = {
  questionText: string;
  answer: string;
};

export type Iteration = {
  iterationName: string;
  iterationDate: string;
  iterationState: string;
  iterationAnswers: IterationAnswer[];
};

const iterationsExample = [
  {
    iterationName: 'First Iteration',
    iterationDate: '2021-01-01',
    iterationState: 'abgeschlossen',
    iterationAnswers: [
      { questionText: 'How do you feel right now?', answer: 'Good' },
      { questionText: 'How is the weather today?', answer: 'Sunny' },
      { questionText: 'How did you sleep last night?', answer: 'Meh' },
    ],
  },
  {
    iterationName: 'Second Iteration',
    iterationDate: '2021-01-01',
    iterationState: 'abgeschlossen',
    iterationAnswers: [
      { questionText: 'How do you feel right now?', answer: 'Good' },
      { questionText: 'How is the weather today?', answer: 'Sunny' },
      { questionText: 'How did you sleep last night?', answer: 'Meh' },
    ],
  },
  {
    iterationName: 'Third Iteration',
    iterationDate: '2021-01-01',
    iterationState: 'abgeschlossen',
    iterationAnswers: [
      { questionText: 'How do you feel right now?', answer: 'Good' },
      { questionText: 'How is the weather today?', answer: 'Sunny' },
      { questionText: 'How did you sleep last night?', answer: 'Meh' },
    ],
  },
];

function HomePage() {
  const [iterations, setIterations] = useState<Iteration[]>([]);

  useEffect(() => {
    const iterationsFromStorage: Iteration[] = JSON.parse(
      localStorage.getItem('iterations') || '[]',
    );

    setIterations(iterationsFromStorage);
  }, []);

  return (
    <main className="w-full max-w-7xl m-auto">
      <h1 className="text-5xl text-center p-9">Dashboard</h1>
      <div className="flex flex-wrap p-5 justify-center">
        {iterations.map((iteration) => {
          return (
            <IterationCard
              key={`iteration-${iteration.iterationName}`}
              iteration={iteration}
            />
          );
        })}
      </div>
    </main>
  );
}

export default HomePage;
