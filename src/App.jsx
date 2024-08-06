import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Todoinput from './components/Todoinput'
import Todolist from './components/Todolist'

function App() {

const [todo,setTodo] = useState([   ])
  const [valueTodo, setInputTodo] = useState('')


  function incrementTodos(newtodo){

    const newtodolist = [...todo, newtodo]
    persistData(newtodolist)
    setTodo(newtodolist)


  }

  function deleteTodos(index){
      const newList = todo.filter((todo,todoindex) => {
        return todoindex !== index
      })

      persistData(newList)
      setTodo(newList)
  }

  function editTodos(index){
      const editData = todo[index]
      setInputTodo(editData)
      deleteTodos(index)
   
  }

  useEffect(() => {

    if (!localStorage){
      return
    }
    let localTodos = localStorage.getItem('todoList')
  
    if (!localTodos) {return}
  
    localTodos = JSON.parse(localTodos).todo
    setTodo(localTodos)
  }, [])
  
  function persistData(newList){
  
    localStorage.setItem('todoList',JSON.stringify({todo : newList}))
  
  }
  

  return (
<main>
      <Todoinput valueTodo = {valueTodo} setInputTodo = {setInputTodo} incrementTodos = {incrementTodos} deleteTodos = {deleteTodos} todo ={todo} setTodo={setTodo} editTodos = {editTodos}/>
      <Todolist todo={todo} deleteTodos= {deleteTodos} editTodos = {editTodos}/>

</main>
  )
}

export default App
