import React from "react";
import { useState } from "react";
import { createTask } from "../api/api";

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

  const handleSubmit = async () => {
    const res = await createTask(data);
    console.log(res)
    if (res?.success) {
      alert("Task Created Successfully");

      setTask({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
      });
    }
  }

  return (
    <div>
      <h4 className="text-start m-2">ADD Tasks</h4>

      <div className="m-5">

        <div className="d-flex justify-content-between">
          <div class="mb-3">
            <label for="floatingInput">Title</label>
            <input type="text" value={data.title} onChange={handleChange} class="form-control  customInput" name="title" id="floatingInput" />
          </div>

          <div class=" mb-3">
            <label for="floatingPassword">StratDate</label>
            <input
              type="date"
              name="startDate"
              value={data.startDate}
              onChange={handleChange}
              class="form-control customInput"
              id="floatingPassword"

            />

          </div>
        </div><div class="mb-3">
          <label for="floatingInput">EndDate</label>
          <input type="date" name="endDate" value={data.endDate} onChange={handleChange} class="form-control customInput" id="floatingInput" />
        </div>

        <div class="mb-3">
          <label for="floatingInput">Description</label>
          <textarea type="text" name="description" value={data.description} onChange={handleChange} class="form-control customInput w-100" id="floatingInput" />
        </div>

        <button className="custombtn rounded text-light btn" onClick={handleSubmit}>Add Task</button>
      </div>
    </div>
  );
};

export default AddTask;
