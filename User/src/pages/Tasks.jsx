import React, { useEffect, useState } from 'react'
import { getTasks } from '../api/api';

const Tasks = () => {
  const [task, setTasks] = useState([]);
  async function fetchAllTasks() {
    const res = await getTasks();
    console.log(res)
    setTasks(res)
  }

  useEffect(() => {
    fetchAllTasks();
  }, [])
  return (
    <div>
      <h5 className='text-start m-3'>All Tasks</h5>
      <div className='m-3 border rounded'>
      <table class="table p-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"> Title</th>
            <th scope="col">Status</th>
            <th scope="col">StartDate</th>
            <th scope="col">EndDate</th>
          </tr>
        </thead>
        <tbody>
          {task?.map((t,i) => (
            <tr>
              <th scope="row">{i+1}</th>
              <td>{t.title}</td>
              <td>{t.status}</td>
              <td>{t.startDate}</td>
              <td>{t.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Tasks
