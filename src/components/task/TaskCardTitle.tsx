import React, { FC, useState, useRef } from "react";

export const TaskCardTitle: FC = () => {
	const [isClick, setIsClick] = useState(false);
	const [inputCardTitle, setInputCardTitle] = useState("Today");
	const inputText: React.MutableRefObject<HTMLInputElement> = useRef(null!);

	const handleClick = () => {
		setIsClick(true);
		//inputText.current.focus();
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault(); //ページの更新を制御
		setIsClick(false);
		setTitle(inputText.current.value);
	};

	const handleBlur = () => {
		setIsClick(false);
		setTitle(inputText.current.value);
	};

	const setTitle = (text: string) => {
		if (!text) setInputCardTitle("NoTitle");
		else setInputCardTitle(text);
	};

	return (
		<div onClick={handleClick} className="taskCardTitleInputArea">
			{isClick ? (
				<form onSubmit={handleSubmit}>
					<input
						className="taskCardTitleInput"
						ref={inputText}
						type="text"
						onBlur={handleBlur}
						defaultValue={inputCardTitle}
						autoFocus
						maxLength={15}
						placeholder="Title..."
					/>
				</form>
			) : (
				<h3>{inputCardTitle}</h3>
			)}
		</div>
	);
};
