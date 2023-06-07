import React, {useState} from 'react';
import './App.css';
import {TaskPropsType, Todolist} from "./Todolist";

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
//BLL:
    const title1: string = "What to learn"
    const title2: string = "What to buy"

    let [tasks1, setTasks1] = useState<Array<TaskPropsType>>(
        [
            {id: 1, task: "HTML", isDone: true},
            {id: 2, task: "CSS", isDone: true},
            {id: 3, task: "JavaScript", isDone: false},
            {id: 4, task: "React", isDone: false},
        ]
    )

    let [filter, setFilter] = useState<FilterValuesType>('all')

    /*   let tasks2: Array<TaskPropsType> = [
           {id: 1, task: "Milk", isDone: true},
           {id: 2, task: "Beer", isDone: true},
           {id: 3, task: "m&m", isDone: false},
           {id: 4, task: "Sneakers", isDone: false},
       ]*/

    const removeTask = (taskId: number) => {
        const filteredTasks = tasks1.filter(el => {
            return el.id !== taskId
        })
        console.log(filteredTasks)
        setTasks1(filteredTasks)
    }

    const getFilteredTasks = (tasks: Array<TaskPropsType>, filter: FilterValuesType): Array<TaskPropsType> => {
        if (filter === 'active') {
            return tasks.filter(task => task.isDone !== true)
        } if(filter === 'completed') {
            return tasks.filter(task => task.isDone !== false)
        } return tasks
            }

    const filteredTasks: Array<TaskPropsType> = getFilteredTasks(tasks1, filter)


//UI:
    return (
        <div className="App">
            <Todolist title={title1}
                      tasks={filteredTasks}
                      removeTask={removeTask}
                      getFilteredTasks={getFilteredTasks}
            />
            {/* <Todolist title={title2} tasks={tasks2}/>*/}
        </div>
    );
}


export default App;


