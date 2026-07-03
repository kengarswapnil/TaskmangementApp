import axiosInstance from "./axiosinstance"

export const assigenedToUSerTask = async (data) => {
  try {
    const res = await axiosInstance.post('/assigendTask', data);
    return res.data;
  } catch (error) {
    console.log(error)
  }
}


export const getTasksByUSer =  async()=>{
  try{
   const res =  await axiosInstance.get('/getTasksByUSer');
   return res.data.getTasks
  }catch(error){
    console.log(error)
  }
}


export const getTaskWithUsers = async(taskID)=>{
  try{
   const res =  await axiosInstance.get(`/getTaskWithUsers/${taskID}`);
   return res.data
  }catch(error){
    console.log(error)
  }
}