import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todos from './Todos'
import SingleTodo from './SingleTodo'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Todos />}></Route>
        <Route path='/:id' element={<SingleTodo />}></Route>
    </Routes>
  )
}

export default MainRoutes