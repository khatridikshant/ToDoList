import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todolist from './components/TodoList'
import Todoinput from './components/Todoinput'

function App() {

  return (
<main>
      <Todoinput />
      <Todolist />
</main>
  )
}

export default App
