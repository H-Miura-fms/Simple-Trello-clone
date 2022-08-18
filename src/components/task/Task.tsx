import React, { FC } from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskList } from "./TaskCard";

type TaskProps = {
	index: number;
	task: TaskList;
	taskList: TaskList[];
	setTaskList: React.Dispatch<React.SetStateAction<TaskList[]>>;
};

export const Task: FC<TaskProps> = (props) => {
	const handleDelete = (id: string) => {
		//console.log(props.index);
		// console.log(parseInt(props.task.id, 16));
		props.setTaskList(props.taskList.filter((task) => task.id !== id));
	};
	return (
		<Draggable index={props.index} draggableId={props.task.draggableId}>
			{(provided) => (
				<div
					className="taskBox"
					key={props.task.id}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<p className="taskText">{props.task.text}</p>
					<button
						className="taskTrashButton"
						onClick={() => handleDelete(props.task.id)}
					>
						<i className="fa-solid fa-trash-can"></i>
					</button>
				</div>
			)}
		</Draggable>
	);
};
