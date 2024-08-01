import React from 'react'
import TodoCard from './Todocard'
const TodoList = (props) => {

  const {todo} = props


  return (
    <>
    <div className="px-2">
    <ul className="list-disc">
        {
            todo.map(
                    (obj,index) => {
                        return (
                          <TodoCard className="" key={index}> <span>{obj}</span></TodoCard>
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