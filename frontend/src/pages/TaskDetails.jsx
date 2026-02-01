import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DeleteTask, getchangeStatus, getSingleTasks } from "../api/api";

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTasks] = useState(null);

  // editing status 
  const [isEditing, setisEditing] = useState(false);
  const [status, setStatus] = useState("");

  const fetchTask = async () => {
    try {
      const res = await getSingleTasks(id);
      setTasks(res);

      console.log("Sending:", status);
      setStatus(res.status);

    } catch (error) {
      console.log(error);
    }
  };


  const handleDeleteTask = async(id)=>{
    try{
     const res =  await DeleteTask(id);
   
       setTasks(null)

   
       }catch(error){
      console.log(error)
    }
  }

  const handleEdit = () => {
    setisEditing(true)
  }

  const handleupdate = async () => {
    try {
      await getchangeStatus(id, status);
      setisEditing(false);
      fetchTask();
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <>
      {task && (<div className="border m-5 p-4 rounded">
        <p>
          <b>Title: </b>
          {task.title}
        </p>
        <p>
          <b>Description: </b>
          {task.description}
        </p>
        <p>
          <b>Status: </b>


          {isEditing ? (
            <select className="form-select w-25 mt-2" value={status} onChange={(e) => setStatus(e.target.value)} id="">
              <option value="Pending">Pending</option>
              <option value="Inprogress">Inprogress</option>
              <option value="Completed">Completed</option>
            </select>
          ) : (
            <span className="ms-2">{task.status}</span>
          )}
        </p>
        <p>
          {" "}
          <b>StartDate: </b> {task.startDate}
        </p>
        <p>
          {" "}
          <b>EndDate: </b> {task.endDate}
        </p>

        <button className="btn btn-danger" onClick={()=>handleDeleteTask(task.id)}>Delete</button>

        {!isEditing ? (
          <button className="btn btn-warning ms-2" onClick={handleEdit}>Edit</button>
        ) : (
          <>
            <button className="btn btn-warning ms-2" onClick={handleupdate}>Save</button>
            <button className="btn btn-warning ms-2" onClick={() => setisEditing(false)}>Cancel</button>
          </>
        )}
      </div>)}
    </>
  );
};

export default TaskDetails;
