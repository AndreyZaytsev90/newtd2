import React from "react";

export type TaskPropsType = {
    id: number,
    task: string,
    isDone: boolean
}

type TodolistPropsType = {
    title: string
    tasks: TaskPropsType[]
}

export function Todolist(props: TodolistPropsType) {

    return (
        <div>
            <h1>{props.title}</h1>
            <div>
                <input type="text"/>
                <button>+</button>
            </div>
            <div>
                <ul>
                    {props.tasks.map((t) =>
                        <li><input type="checkbox" checked={t.isDone}/><span>{t.task}</span></li>
                    )}
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