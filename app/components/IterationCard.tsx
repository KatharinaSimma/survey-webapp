import { useState } from 'react';
import { Iteration } from './Dashboard';

type Props = {
  iteration: Iteration;
};

function IterationCard(props: Props) {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <div className="card w-72 bg-primary text-primary-content m-3">
      <div className="card-body">
        <h2 className="card-title">{props.iteration.iterationName}</h2>
        <p>{props.iteration.iterationDate}</p>
        <p>{props.iteration.iterationState}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-sm"
            onClick={() => setShowAnswers(!showAnswers)}
          >
            Show Answers
          </button>
        </div>
        {showAnswers && (
          <ul>
            {props.iteration.iterationAnswers.map((answer) => {
              return (
                <li
                  key={`iteration-${props.iteration.iterationName}-answer-${answer.questionText}`}
                >
                  {answer.questionText}
                  {answer.answer}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default IterationCard;
