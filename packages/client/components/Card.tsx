import * as React from "react";
import "./Card.css";
import Answer from "./Answer";

type Props = {
	answers: string[];
}

const Card: React.FC<Props> = ({ answers }: Props) => {
	return (
		<div className="answers-container">
			{answers.map(answer => <Answer key={answer} answer={answer} />)}
		</div>
	);
};

export default Card;