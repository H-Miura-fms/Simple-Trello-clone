import React, { useState, FC } from "react";
import "./App.css";
//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Header } from "./components/header/Header";
import { TaskCards } from "./components/task/TaskCards";

const App: FC = () => {
	return (
		<div className="app">
			<Header />
			<TaskCards />
		</div>
	);
};

export default App;
