import React, {FC, JSX} from "react";
import {FilterValuesType} from "./App";

export type TaskPropsType = {
    id: number,
    task: string,
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: TaskPropsType[]
    removeTask: (id: number) => void
    changeFilter: (filter: FilterValuesType) => void
}

export const Todolist: FC<TodolistPropsType> = ({
                                                    title,
                                                    tasks,
                                                    removeTask,
                                                    changeFilter
                                                }) => {

    //const {title, tasks} = props
    const onClickHandler = (id: number) => {
        removeTask(id)
    }

    const onChangeHandler = (filter: FilterValuesType) => {
        changeFilter(filter)
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
                <input type="text"/>
                <button>+</button>
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

