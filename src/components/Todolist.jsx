import React from 'react'
import TodoCard from './Todocard'
const TodoList = (props) => {

  const {todo, deleteTodos,editTodos} = props


  return (
    <>
    <div className="px-2">
    <ul className="list-disc">
        {
            todo.map(
                    (obj,index) => {
                        return (
                          <TodoCard className="" deleteTodos = {deleteTodos} key={index} index = {index} editTodos = {editTodos}> <span>{obj}</span></TodoCard>
                        )
                    }
            )
        }
    </ul>
</div>
</>
  )
}

export default TodoList