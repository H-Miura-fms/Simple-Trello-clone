import React, { FC } from "react";
import { taskCardProps } from "../TaskCard";

export const TaskCardDeleteButton: FC<taskCardProps> = (props) => {
	const taskCardDeleteButton = (id: string) => {
		props.setTaskCardList(props.taskCardList.filter((e) => e.id !== id));
	};
	return (
		<div>
			<button
				className="taskCardDeleteButton"
				onClick={() => taskCardDeleteButton(props.taskCard.id)}
			>
				<i className="fa-solid fa-xmark"></i>
			</button>
		</div>
	);
};
