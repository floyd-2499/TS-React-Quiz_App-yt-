import React, { FC } from "react";
import {AnswerObject} from '../App';
import {ButtonWrapper} from '../css/App.styles'

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  //   userAnswer: string;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  console.log(answers);

  return (
    <div className="card">
      <p className="number">
        Question: {questionNr}/{totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div >

        {answers.map(answer => 
         ( <ButtonWrapper key={answer} correct={userAnswer?.correctAnswer === answer}
         userClicked={userAnswer?.answer === answer}
         >
            <button disabled={!!userAnswer} value={answer} onClick={callback}>                       {/* converting to boolean {!!userAnswer} */}
            {/* <button disabled={userAnswer ? true :false} value={answer} onClick={callback}> */}   
                <span dangerouslySetInnerHTML={{__html: answer}}></span>
            </button>
          </ButtonWrapper>)
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
