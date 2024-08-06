import { useState } from "react"

export default function Todoinput(props){

    const {todo,valueTodo,setInputTodo} = props


    const {incrementTodos, deleteTodos,editTodos} = props
    return (
       <header>
        <div className="flex h-10">
        <input placeholder="Enter" value={valueTodo} onChange={ e => setInputTodo(e.target.value)} className="border block w-3/4 px-2 rounded mt-2 mr-2" ></input>
        <button onClick={() => { 
            
            if (valueTodo.length > 0){
            incrementTodos(valueTodo); setInputTodo("")} else {
                
                alert("Missing Value");
            }
            
            }} className="mt-2 bg-blue-500 hover:bg-blue-950 rounded px-5 text-white font-bold">Add</button>
        </div>

       </header>
    )
}