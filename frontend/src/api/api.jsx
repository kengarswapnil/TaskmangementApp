import axiosInstance from "./axiosinstance";
import react from 'react'


export const getTasks = async (req, res) => {
  try {
    const res = await axiosInstance.get('/getAllTask');
    return res.data.tasks
  } catch (error) {
    console.log(error)
  }
}


export const getAlluser = async (req, res) => {
  try {
    const res = await axiosInstance.get('/getAllusers');
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
    const res = await axiosInstance.post('/register', registerData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    return res;
  } catch (error) {
    console.log(error)
  }
}

export const getUser = async () => {
  try {
    const res = await axiosInstance.get('/getuserProfile')
    return res;
  } catch (error) {
    console.log(error)
  }
}


// get changeStatus
export const getchangeStatus = async (id, status) => {
  try {
    const res = await axiosInstance.patch(`/updateStatus/${id}`, { status })
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
    return res.data.index
  } catch (error) {
    console.log(error)
  }
}



// delete task
export const DeleteTask = async (id) => {
  try {
    const res = await axiosInstance.delete(`/deletetask/${id}`)
    return res.data
  } catch (error) {
    console.log(error)
  }
}

export const TotalTask = async () => {
  try {
    const res = await axiosInstance.get('/totalTasks');
    return res.data.TotalTasks
  } catch (error) {
    console.log(error)
  }
}


export const TotalUser = async () => {
  try {
    const res = await axiosInstance.get('/totalUser')
    return res.data.TotalUsers
  } catch (error) {
    console.log(error)
  }
}


export const CompletedTask = async () => {
  try {
    const res = await axiosInstance.get('/getCompletdTask')
    return res.data.data
  } catch (error) {
    console.log(error)
  }
}


export const FilterTaskUsingStstus = async (status) => {
  try {
    const res = await axiosInstance.get(`/getTaskByStatus?status=${status}`)
    return res.data.data
  } catch (error) {
    console.log(error)
  }
}


export const FilteerdUsingMonth = async () => {
  try {
    const res = await axiosInstance.get('/getTaskByMonth');
    return res.data.tasks
  } catch (error) {
    console.log(error)
  }
}


export const UpdateProfile = async (data) => {
  try {
    const res = await axiosInstance.patch('/updateProfile', data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data
  } catch (error) {
    console.log(error)
  }
}


export const DeleteUser = async (id) => {
  try {
    const res = await axiosInstance.delete(`/deleteUser/${id}`)
    return res.data;
  } catch (error) {
    console.log(error)
  }
}

export const updatePssword = async (data) => {
  try {
    const res = await axiosInstance.patch('/changepassword',data);
    console.log(res.data)
    return res.data;
  } catch (error) {
    console.log(error)
  }
} 