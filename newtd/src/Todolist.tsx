import React, {ChangeEvent, FC, JSX, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "./App";

export type TaskPropsType = {
    id: string,
    task: string,
    isDone: boolean
}

type TodolistPropsType = {
    //id: string
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
                                                    addTask,
                                                }) => {
    let [inputTitle, setInputTitle] = useState('')

    //const {title, tasks} = props

    const onAllChangeHandler = () => changeFilter('all')
    const onActiveChangeHandler = () => changeFilter('active')
    const onCompletedChangeHandler = () => changeFilter('completed')

    const onChangeAddTaskHandler = (e: ChangeEvent<HTMLInputElement>) => setInputTitle(e.currentTarget.value)

    const addTaskHandler = () => {
        addTask(inputTitle)
        setInputTitle('')
    }

    const keyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addTaskHandler()


    let tasksJSX: Array<JSX.Element> =
        tasks.map((task) => {

                const removeTaskHandler = () => removeTask(task.id)

                return (
                    <li key={task.id}>
                        <button onClick={removeTaskHandler}>X</button>
                        <input type="checkbox" checked={task.isDone}/>
                        <span>{task.task}</span>
                    </li>
                )
            }
        )

    return (
        <div>
            <h1>{title}</h1>
            <div>
                <input type="text"
                       value={inputTitle}
                       onChange={onChangeAddTaskHandler}
                       onKeyDown={keyPressHandler}/>
                <button onClick={addTaskHandler}>+</button>
            </div>
            <div>
                <ul>
                    {tasksJSX}
                </ul>
            </div>
            <div>
                <button onClick={onAllChangeHandler}>All</button>
                <button onClick={onActiveChangeHandler}>Active</button>
                <button onClick={onCompletedChangeHandler}>Completed</button>
            </div>
        </div>

    )
}

