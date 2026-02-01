import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashborad from './components/Dashborad'
import Login from './components/Login';
import Register from './components/Register';
import Users from './pages/Users';
import Tasks from './pages/Tasks';
import AddTask from './pages/AddTask'
import DashboardHome from './components/DashboardHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/dashboard' element={<Dashborad />}>
          <Route path='home' element={<DashboardHome/>}></Route>
          <Route path='users' element={<Users/>}></Route>
          <Route path='tasks' element={<Tasks/>}></Route>
          <Route path='add-tasks' element={<AddTask/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
