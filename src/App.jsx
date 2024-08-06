import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Todoinput from './components/Todoinput'
import Todolist from './components/Todolist'

function App() {

const [todo,setTodo] = useState([    "Go To Gym",
  "Eat lots of veggies and fruits",
  "Pick Kids From School",
  "Buy lots of toys",
  "Play Lots Of Videogames"])

  function incrementTodos(newtodo){

    const newtodolist = [...todo, newtodo]

    setTodo(newtodolist)


  }

  function deleteTodos(index){
      const newList = todo.filter((todo,todoindex) => {
        return todoindex !== index
      })

      setTodo(newList)
  }

  function editTodos(index){

  }

  return (
<main>
      <Todoinput incrementTodos = {incrementTodos} deleteTodos = {deleteTodos}/>
      <Todolist todo={todo} deleteTodos= {deleteTodos}/>

</main>
  )
}

export default App
