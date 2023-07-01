import React, {useState} from 'react';
import './App.css';
import {TaskPropsType, Todolist} from "./Todolist";
import {v1} from "uuid";

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
//BLL:
    const title1: string = "What to learn"
   // const title2: string = "What to buy"

    let [tasks, setTasks] = useState<Array<TaskPropsType>>(
        [
            {id: v1(), task: "HTML", isDone: true},
            {id: v1(), task: "CSS", isDone: true},
            {id: v1(), task: "JavaScript", isDone: false},
            {id: v1(), task: "React", isDone: false},
        ]
    )
    

    let [filter, setFilter] = useState<FilterValuesType>('all')

    /*   let tasks2: Array<TaskPropsType> = [
           {id: 1, task: "Milk", isDone: true},
           {id: 2, task: "Beer", isDone: true},
           {id: 3, task: "m&m", isDone: false},
           {id: 4, task: "Sneakers", isDone: false},
       ]*/

    const removeTask = (taskId: string) => {
        const filteredTasks = tasks.filter(el => {
            return el.id !== taskId
        })
        console.log(filteredTasks)
        setTasks(filteredTasks)
    }

    const addTask = (title: string) => {
        const newTask = {id: v1(), task: title, isDone: false}
        setTasks([newTask, ...tasks])
    }

    const getFilteredTasks = (tasks: Array<TaskPropsType>, filter: FilterValuesType): Array<TaskPropsType> => {
        if (filter === 'active') {
            return tasks.filter(task => task.isDone !== true)
        }
        if (filter === 'completed') {
            return tasks.filter(task => task.isDone !== false)
        }
        return tasks
    }

    const filteredTasks: Array<TaskPropsType> = getFilteredTasks(tasks, filter)

    const changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }


//UI:
    return (
        <div className="App">
            <Todolist title={title1}
                      tasks={filteredTasks}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}

            />
            {/* <Todolist title={title2} tasks={tasks2}/>*/}
        </div>
    );
}


export default App;


