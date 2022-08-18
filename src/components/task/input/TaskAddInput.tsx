import React, { Dispatch, FC, SetStateAction, useRef } from "react";
import { v4 as uuid } from "uuid";
import { TaskList } from "../TaskCard";

type TaskAddInputProps = {
	inputText: string;
	setInputText: Dispatch<SetStateAction<string>>;
	taskList: TaskList[];
	setTaskList: Dispatch<SetStateAction<TaskList[]>>;
};

export const TaskAddInput: FC<TaskAddInputProps> = (
	props: TaskAddInputProps
) => {
	const inputEl: React.MutableRefObject<HTMLInputElement> = useRef(null!);
	const handleSubmit = (e: React.FormEvent) => {
		const taskId = uuid();
		e.preventDefault();
		if (!inputEl.current.value) return;
		// console.log(inputEl.current.value);
		props.setInputText(inputEl.current.value);
		// console.log(props.inputText);

		//カード追加
		props.setTaskList([
			...props.taskList,
			{
				id: taskId,
				text: inputEl.current.value,
				draggableId: `task-${taskId}`,
			},
		]);
		//console.log(...props.taskList);

		inputEl.current.value = "";
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					ref={inputEl}
					type="text"
					placeholder="add a task"
					className="taskAddInput"
				/>
			</form>
		</div>
	);
};
