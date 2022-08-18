import React, { FC } from "react";
import {
	DragDropContext,
	Droppable,
	DropResult,
} from "react-beautiful-dnd";
import { Task } from "./Task";
import { TaskList } from "./TaskCard";
type TasksProps = {
	taskList: TaskList[];
	setTaskList: React.Dispatch<React.SetStateAction<TaskList[]>>;
};

export const Tasks: FC<TasksProps> = (props) => {
	const reoder = (
		taskList: TaskList[],
		startIndex: number,
		endIndex: number
	) => {
		const temp = taskList.splice(startIndex, 1);
		taskList.splice(endIndex, 0, temp[0]);
	};

	const handleDragEnd = (result: DropResult) => {
		if (!result.destination) return;
		reoder(props.taskList, result.source.index, result.destination.index);
		props.setTaskList(props.taskList);
	};
	return (
		<div>
			<DragDropContext onDragEnd={handleDragEnd}>
				<Droppable droppableId="droppable">
					{(provided) => (
						<div {...provided.droppableProps} ref={provided.innerRef}>
							{props.taskList.map((task, index) => (
								<div key={task.id}>
									<Task
										index={index}
										task={task}
										taskList={props.taskList}
										setTaskList={props.setTaskList}
									/>
								</div>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
};
