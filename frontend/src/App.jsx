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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './pages/Profile';
import Mytasks from './user/Mytasks';

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
          <Route path='profile' element={<Profile/>}></Route>
          <Route path='users' element={<Users/>}></Route>
          <Route path='mytasks' element={<Mytasks/>}></Route>
          <Route path='tasks' element={<Tasks/>}></Route>
          <Route path='add-tasks' element={<AddTask/>}></Route>
          <Route path='taskDetails/:id'  element={<TaskDetails/>}></Route>
        </Route>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  )
}

export default App
