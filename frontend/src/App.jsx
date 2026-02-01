import { Children, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Users from './pages/Users';
import Tasks from './pages/Tasks';
import AddTask from './pages/AddTask'
import DashboardHome from './components/DashboardHome';
import TaskDetails from './pages/TaskDetails';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashborad';

function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path='/dashboard' element={<ProtectedRoute >
          <Dashboard/>
        </ProtectedRoute>}>
          <Route path='home' element={<DashboardHome/>}></Route>
          <Route path='users' element={<Users/>}></Route>
          <Route path='tasks' element={<Tasks/>}></Route>
          <Route path='add-tasks' element={<AddTask/>}></Route>
          <Route path='taskDetails/:id'  element={<TaskDetails/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
