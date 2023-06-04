import React, {FC} from "react";

export type TaskPropsType = {
    id: number,
    task: string,
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: TaskPropsType[]
    removeTask: (id: number) => void
}

export const Todolist: FC<TodolistPropsType> = ({title, tasks, removeTask}) => {

    //const {title, tasks} = props
    const onClickHandler = (id: number) => {
        removeTask(id)
    }

    let tasksJSX: Array<JSX.Element> =
        tasks.map((task) =>
            <li key={task.id}>
                <button onClick={()=>onClickHandler(task.id)}>X</button>
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