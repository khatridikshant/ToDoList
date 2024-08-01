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
  return (
<main>
      <Todoinput incrementTodos = {incrementTodos}/>
      <Todolist todo={todo}/>

</main>
  )
}

export default App
