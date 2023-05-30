import React, {FC} from "react";

export type TaskPropsType = {
    id: number,
    task: string,
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: TaskPropsType[]
}

export const Todolist: FC<TodolistPropsType> = ({title, tasks}) => {

    //const {title, tasks} = props

    const tasksJSX: Array<JSX.Element> =
        tasks.map((task) =>
            <li key={task.id}>
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
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>

    )
}