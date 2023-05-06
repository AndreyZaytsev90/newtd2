import React from 'react';
import './App.css';
import {TaskPropsType, Todolist} from "./Todolist";

function App() {

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


    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks1}/>
            <Todolist title="What to buy" tasks={tasks2}/>
        </div>
    );
}


export default App;


