import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Todoinput from './components/Todoinput'
import Todolist from './components/Todolist'

function App() {

  return (
<main>
      <Todoinput />
      <Todolist />

</main>
  )
}

export default App
