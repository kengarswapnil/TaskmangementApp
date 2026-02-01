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
