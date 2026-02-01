import React from "react";

const AddTask = () => {
  return (
    <div>
      <h4 className="text-start m-2">ADD Tasks</h4>

      <div className="m-5">

        <div className="d-flex justify-content-between">
          <div class="mb-3">
            <label for="floatingInput">Title</label>
            <input type="text" class="form-control customInput" id="floatingInput" />
          </div>

          <div class=" mb-3">
            <label for="floatingPassword">StratDate</label>
            <input
              type="password"
              class="form-control customInput"
              id="floatingPassword"

            />

          </div>
        </div><div class="mb-3">
          <label for="floatingInput">EndDate</label>
          <input type="text" class="form-control customInput" id="floatingInput" />
        </div>

        <div class="mb-3">
          <label for="floatingInput">Description</label>
          <textarea type="text" class="form-control customInput w-100" id="floatingInput" />
        </div>

        <button className="custombtn rounded text-light btn">Add Task</button>
      </div>
    </div>
  );
};

export default AddTask;
