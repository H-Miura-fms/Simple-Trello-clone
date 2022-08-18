import React, { FC } from "react";
import { v4 as uuid } from "uuid";
import { cardList } from "../TaskCards";

type cardListProps = {
	taskCardList: cardList[];
	setTaskCardList: React.Dispatch<React.SetStateAction<cardList[]>>;
};

export const AddTaskCardButton: FC<cardListProps> = (props) => {
	const taskCardId = uuid();

	const addTaskCard = () => {
		props.setTaskCardList([
			...props.taskCardList,
			{ id: taskCardId, draggableId: `item${taskCardId}` },
		]);
	};

	return (
		<div className="addTaskCardButtonArea">
			<button className="addTaskCardButton" onClick={addTaskCard}>
				+
			</button>
		</div>
	);
};
