import * as React from "react";
import "./Question.css";

type Props = {
	title: string;
}

const Question: React.FC<Props> = ({title}: Props) => {
  return (
    <div className="gameplay-question">
      <div className="question-container">
        <div className="well question  timeout">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Question;
