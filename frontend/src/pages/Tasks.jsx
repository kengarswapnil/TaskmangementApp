// import React, { useEffect, useState } from "react";
// import { FilterTaskUsingStstus, getTasks } from "../api/api";
// import { Link } from "react-router-dom";

// const Tasks = () => {
//   const [task, setTasks] = useState([]);
//   const [status, setStatus] = useState("");
//   async function fetchAllTasks() {
//     const res = await getTasks();
//     console.log(res);
//     setTasks(res);
//   }

//   const handleChange = (e) => {
//     setStatus(e.target.value);
//   };

//   const handleSubmit = async () => {
//     if (!status) {
//       alert("Please select status");
//       return;
//     }
//     const res = await FilterTaskUsingStstus(status);
//     setTasks(res);
//   };

//   useEffect(() => {
//     fetchAllTasks();
//   }, []);
//   return (
//     <div>
//       <h5 className="text-start m-3 fw-bold text-primary  ">All Tasks</h5>
//       <div className="d-flex justify-content-between align-items-center m-3 bg-light p-3 rounded shadow-sm">
//         <select className="form-select w-25" onChange={handleChange} value={status}>
//           <option value="">Select Status</option>
//           <option value="Pending">Pending</option>
//           <option value="Inprogress">Inprogress</option>
//           <option value="Completed">Completed</option>
//         </select>

//         <div>
//           <button className="btn btn-primary px-4" onClick={handleSubmit}>
//             Search
//           </button>
//         </div>
//       </div>
//       <div className="card shadow-sm m-3 rounded-3 overflow-hidden">
//         <div className="card-body p-0">
//           <table className="table table-hover align-middle mb-0">
//             <thead className="table-light">
//               <tr className="table-light">
//                 <th scope="col">#</th>
//                 <th scope="col"> Title</th>
//                 <th scope="col">Status</th>
//                 <th scope="col">StartDate</th>
//                 <th scope="col">EndDate</th>
//                 <th scope="col">Details</th>
//               </tr>
//             </thead>
//             <tbody>
//               {task.map((t, i) => (
//                 <tr key={i}>
//                   <th scope="row">{i + 1}</th>
//                   <td>{t.title}</td>
//                   <td> <span className={`status-badge ${t.status}`}>{t.status}</span></td>
//                   <td>{t.startDate}</td>
//                   <td>{t.endDate}</td>
//                   <td>
//                     <Link
//                       to={`/dashboard/taskDetails/${t.task_id}`}
//                       className="btn btn-sm btn-outline-primary"
//                     >
//                       Explore
//                     </Link>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tasks;


import React, { useEffect, useState } from "react";
import { FilterTaskUsingStstus, getTasks } from "../api/api";
import { Link } from "react-router-dom";

const Tasks = () => {
  const [task, setTasks] = useState([]);
  const [status, setStatus] = useState("");
  async function fetchAllTasks() {
    const res = await getTasks();
    console.log(res);
    setTasks(res);
  }

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = async () => {
    if (!status) {
      alert("Please select status");
      return;
    }
    const res = await FilterTaskUsingStstus(status);
    setTasks(res);
  };

  useEffect(() => {
    fetchAllTasks();
  }, []);
  return (
    <div>
      <h5 className="text-start m-3 fw-bold text-primary  ">All Tasks</h5>
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 m-3 bg-light p-3 rounded shadow-sm">
        <select
          className="form-select w-100 w-md-25"
          style={{ maxWidth: "260px" }}
          onChange={handleChange}
          value={status}
        >
          <option value="">Select Status</option>
          <option value="Pending">Pending</option>
          <option value="Inprogress">Inprogress</option>
          <option value="Completed">Completed</option>
        </select>

        <div className="w-100 w-md-auto">
          <button className="btn btn-primary px-4 w-100 w-md-auto" onClick={handleSubmit}>
            Search
          </button>
        </div>
      </div>
      <div className="card shadow-sm m-3 rounded-3 overflow-hidden">
        <div className="card-body p-0 table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr className="table-light">
                <th scope="col">#</th>
                <th scope="col"> Title</th>
                <th scope="col">Status</th>
                <th scope="col">StartDate</th>
                <th scope="col">EndDate</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              {task.map((t, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{t.title}</td>
                  <td> <span className={`status-badge ${t.status}`}>{t.status}</span></td>
                  <td>{t.startDate}</td>
                  <td>{t.endDate}</td>
                  <td>
                    <Link
                      to={`/dashboard/taskDetails/${t.task_id}`}
                      className="btn btn-sm btn-outline-primary"
                    >
                      Explore
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Tasks;