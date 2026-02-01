import axiosInstance from "./axiosinstance";
import react from 'react'


export const getTasks = async (req, res) => {
  try {
    const res = await axiosInstance.get('/getAllTask');
    console.log(res.data)
    return res.data.tasks
  } catch (error) {
    console.log(error)
  }
}


export const getAlluser = async (req, res) => {
  try {
    const res = await axiosInstance.get('/getAllusers');
    console.log(res.data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}


export const createTask = async (tasks) => {
  try {
    const res = await axiosInstance.post('/createTask', tasks)
    return res.data
  } catch (error) {
    console.log(error)
  }
}


export const getlogin = async (loginData) => {
  try {
    const res = await axiosInstance.post('/login', loginData)
    return res.data;
  } catch (error) {
    console.log(error)
  }
}

export const getRegister = async (registerData) => {
  try {
    const res = await axiosInstance.post('/register', registerData)
    return res;
  } catch (error) {
    console.log(error)
  }
}

export const getUser = async () => {
  try {
    const res = await axiosInstance.get('/getuserProfile')
    console.log("USER:", res?.data?.loggedUser);
    return res;
  } catch (error) {
    console.log(error)
  }
}


// get changeStatus
export const getchangeStatus = async (id,status) => {
  try {
    const res = await axiosInstance.patch(`/updateStatus/${id}`,{status})
    console.log(res.data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}


// singleTask

export const getSingleTasks = async (id) => {
  try {
    const res = await axiosInstance.get(`/getsingleTask/${id}`)
    return  res.data.index 
  } catch (error) {
    console.log(error)
  }
}



// delete task
export const DeleteTask = async(id)=>{
 try{
   const res =  await axiosInstance.delete(`/deletetask/${id}`)
    return res.data
 }catch(error){
  console.log(error)
 }
}