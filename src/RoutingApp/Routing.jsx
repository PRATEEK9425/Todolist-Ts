import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todos from '../Todos/Todos'
import CreateTodo from '../Todos/CreateTodo'
import EditTodo from '../Todos/EditTodo'

const Routing = () => {
  return (
    <div>



<Routes>
<Route path="/" element={<Todos/>}  />
<Route path="/createlist" element={<CreateTodo/>}  />
<Route path="/editlist/:id" element={<EditTodo/>}  />
</Routes>
    </div>
  )
}

export default Routing