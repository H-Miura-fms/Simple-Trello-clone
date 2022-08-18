import React, { FC, useState } from "react";
import { TaskCard } from "./TaskCard";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

export type cardList = {
	id: string;
	draggableId: string;
};

export const TaskCards: FC = () => {
	const [taskCardList, setTaskCardList] = useState<cardList[]>([
		{
			id: "0",
			draggableId: "item0",
		},
	]);

	const reoder = (
		cardList: cardList[],
		startIndex: number,
		endIndex: number
	) => {
		const temp = cardList.splice(startIndex, 1);
		cardList.splice(endIndex, 0, temp[0]);
	};

	const handleDragEnd = (result: DropResult) => {
		if (!result.destination) return;
		reoder(taskCardList, result.source.index, result.destination.index);
		setTaskCardList(taskCardList);
	};
	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			<Droppable droppableId="droppable" direction="horizontal">
				{(provided) => (
					<div
						className="taskCardsArea"
						{...provided.droppableProps}
						ref={provided.innerRef}
					>
						{taskCardList.map((taskCard, index) => (
							<TaskCard
								index={index}
								key={taskCard.id}
								taskCardList={taskCardList}
								setTaskCardList={setTaskCardList}
								taskCard={taskCard}
							/>
						))}
						{provided.placeholder}

						<AddTaskCardButton
							taskCardList={taskCardList}
							setTaskCardList={setTaskCardList}
						></AddTaskCardButton>
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};
