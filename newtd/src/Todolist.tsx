import React, {ChangeEvent, FC, JSX, useState} from "react";
import {FilterValuesType} from "./App";

export type TaskPropsType = {
    id: string,
    task: string,
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: TaskPropsType[]
    removeTask: (id: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (title: string) => void
}

export const Todolist: FC<TodolistPropsType> = ({
                                                    title,
                                                    tasks,
                                                    removeTask,
                                                    changeFilter,
                                                    addTask
                                                }) => {
    let [inputTitle, setInputTitle] = useState('')

    //const {title, tasks} = props
    const onClickHandler = (id: string) => {
        removeTask(id)
    }

    const onChangeHandler = (filter: FilterValuesType) => {
        changeFilter(filter)
    }

    const onChangeAddTaskHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.currentTarget.value)
    }

    const addTaskHandler = () => {
        addTask(inputTitle)
        setInputTitle('')
    }



    let tasksJSX: Array<JSX.Element> =
        tasks.map((task) =>
            <li key={task.id}>
                <button onClick={() => onClickHandler(task.id)}>X</button>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.task}</span>
            </li>
        )

    return (
        <div>
            <h1>{title}</h1>
            <div>
                <input type="text" value={inputTitle} onChange={onChangeAddTaskHandler}/>
                <button onClick={addTaskHandler}>+</button>
            </div>
            <div>
                <ul>
                    {tasksJSX}
                </ul>
            </div>
            <div>
                <button onClick={() => onChangeHandler('all')}>All</button>
                <button onClick={() => onChangeHandler('active')}>Active</button>
                <button onClick={() => onChangeHandler('completed')}>Completed</button>
            </div>
        </div>

    )
}

