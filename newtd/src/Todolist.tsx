import React from "react";

export function Todolist() {

    return (
        <div>
            <h1>What to learn</h1>
            <div>
                <input type="text"/>
                <button>+</button>
            </div>
            <div>
                <ul>
                    <li><input type="checkbox" checked={true}/><span>CSS&HTML</span></li>
                    <li><input type="checkbox" checked={true}/><span>JS</span></li>
                    <li><input type="checkbox" checked={true}/><span>React</span></li>
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