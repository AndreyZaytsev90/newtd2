import React from 'react';
import './App.css';
import {TaskPropsType, Todolist} from "./Todolist";

function App() {
//BLL:
    const title1: string = "What to learn"
    const title2: string = "What to buy"

    const tasks1: Array<TaskPropsType> = [
        {id: 1, task: "HTML", isDone: true},
        {id: 2, task: "CSS", isDone: true},
        {id: 3, task: "JavaScript", isDone: false},
        {id: 4, task: "React", isDone: false},
    ]

    const tasks2: Array<TaskPropsType> = [
        {id: 1, task: "Milk", isDone: true},
        {id: 2, task: "Beer", isDone: true},
        {id: 3, task: "m&m", isDone: false},
        {id: 4, task: "Sneakers", isDone: false},
    ]

//UI:
    return (
        <div className="App">
            <Todolist title={title1} tasks={tasks1}/>
            <Todolist title={title2} tasks={tasks2}/>
        </div>
    );
}


export default App;


