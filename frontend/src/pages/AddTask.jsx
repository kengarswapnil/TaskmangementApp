import React from "react";
import { useState } from "react";
import { createTask } from "../api/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddTask = () => {
  const [data, setData] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: ""
  })

  function handleChange(e) {
    setData({
      ...data, [e.target.name]: e.target.value
    });
  }


  const notify = (msg) => toast.success(msg);

  const handleSubmit = async () => {
    const res = await createTask(data);
    console.log(res)
    if (res?.success) {
      notify("Task Created Successfully");

      setData({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
      });
    }
  }

  return (
    <div className="container ">
      <h4 className="text-start m-1 fw-bold text-primary">ADD Tasks</h4>

      <div className="card shadow p-4">

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Title</label>
            <input type="text" value={data.title} onChange={handleChange} className="form-control  customInput" name="title" id="floatingInput" />
          </div>

          <div className="col-md-6 mb-3">
            <label className="form-label">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={data.startDate}
              onChange={handleChange}
              className="form-control customInput"
              id="floatingPassword"

            />

          </div>
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">End Date</label>
          <input type="date" name="endDate" value={data.endDate} onChange={handleChange} className="form-control customInput" id="floatingInput" />
        </div>

        <div className="col-md-12 mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            value={data.description}
            onChange={handleChange}
            className="form-control"
            rows="3"
            placeholder="Enter task details..."
          />
        </div>
        <button className="custombtn rounded text-light btn" onClick={handleSubmit}>Add Task</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddTask;
