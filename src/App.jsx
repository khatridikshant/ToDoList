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
  const [valueTodo, setInputTodo] = useState('')
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
      const editData = todo[index]
      setInputTodo(editData)
      deleteTodos(index)
  }

  return (
<main>
      <Todoinput valueTodo = {valueTodo} setInputTodo = {setInputTodo} incrementTodos = {incrementTodos} deleteTodos = {deleteTodos} todo ={todo} setTodo={setTodo} editTodos = {editTodos}/>
      <Todolist todo={todo} deleteTodos= {deleteTodos} editTodos = {editTodos}/>

</main>
  )
}

export default App
