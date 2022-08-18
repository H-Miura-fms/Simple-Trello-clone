import React, { FC, useState } from "react";
import { TaskCardTitle } from "./TaskCardTitle";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskAddInput } from "./input/TaskAddInput";
import { Tasks } from "./Tasks";
import { cardList } from "./TaskCards";
import { Draggable } from "react-beautiful-dnd";

export type TaskList = {
	id: string;
	draggableId: string;
	text: string;
};

export type taskCardProps = {
	taskCardList: cardList[];
	setTaskCardList: React.Dispatch<React.SetStateAction<cardList[]>>;
	taskCard: cardList;
	index?: number;
};

export const TaskCard: FC<taskCardProps> = (props) => {
	const [inputText, setInputText] = useState("");
	const [taskList, setTaskList] = useState<TaskList[]>([]);

	return (
		<Draggable index={props.index!} draggableId={props.taskCard.id}>
			{(provided) => (
				<div
					className="taskCard"
					ref={provided.innerRef}
					{...provided.draggableProps}
				>
					<div
						className="taskCardTitleAndCardDeleteButtonArea"
						{...provided.dragHandleProps}
					>
						<TaskCardTitle />
						<TaskCardDeleteButton
							taskCardList={props.taskCardList}
							setTaskCardList={props.setTaskCardList}
							taskCard={props.taskCard}
						/>
					</div>

					<TaskAddInput
						inputText={inputText}
						setInputText={setInputText}
						taskList={taskList}
						setTaskList={setTaskList}
					/>
					<Tasks taskList={taskList} setTaskList={setTaskList} />
				</div>
			)}
		</Draggable>
	);
};
