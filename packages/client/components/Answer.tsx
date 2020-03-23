import React from "react";

type Props = {
	answer: string;
}

const Answer: React.FC<Props> = ({answer}: Props) => {
	return (
		<div className="btn-container">
			<button type="button" className="btn btn-play-now">
				{answer}
			</button>
		</div>
	);    
};

export default Answer;
