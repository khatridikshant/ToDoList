import React from 'react'

const TodoCard = (props) => {
  const {children, deleteTodos,index} = props
  return (
    <li className="bg-gray-500 rounded py-2 mb-2 mt-2 flex items-center"> 


<span className='flex-1'>
{children} </span>

<span className='flex items-center'>
  <button>
<i class="fa-solid fa-pen-to-square ml-2 mr-2"></i></button>
<button onClick={() => {
  deleteTodos(index)
}}><i class="fa-solid fa-trash ml-2 mr-2"></i></button>
</span>
      </li>
  )
}

export default TodoCard