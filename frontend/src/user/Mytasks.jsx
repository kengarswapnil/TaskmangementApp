// import React, { useEffect, useState } from 'react'
// import { getTasksByUSer } from '../api/AssignTask';
// import { Link } from 'react-router-dom';

// const Mytasks = () => {
//   const [mytask, setMyTasks] = useState([]);
//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [sortBy, setSortBy] = useState("Newest");



//   const fetchMyTask = async () => {
//     try {
//       const res = await getTasksByUSer();
//       setMyTasks(res);
//       console.log(res)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const filterTasks = mytask.filter((t) => {
//     const searchTask = t.Task?.title?.toLowerCase().includes(search.toLowerCase()) || t?.Task?.description?.toLowerCase().includes(search.toLowerCase())

//     const StatusMatch = statusFilter === 'All' || t.Task?.status === statusFilter;

//     return searchTask && StatusMatch;
//   }).sort((a, b) => {
//     switch (sortBy) {
//       case "Newest":
//         return new Date(b.createdAt) - new Date(a.createdAt); // ✅ fixed

//       case "Oldest":
//         return new Date(a.createdAt) - new Date(b.createdAt); // ✅ fixed

//       case "A-Z":
//         return (a.Task?.title || "").localeCompare(b.Task?.title || "");

//       case "Z-A":
//         return (b.Task?.title || "").localeCompare(a.Task?.title || "");

//       case "Start Date":
//         return new Date(a.Task?.startDate) - new Date(b.Task?.startDate);

//       case "End Date":
//         return new Date(a.Task?.endDate) - new Date(b.Task?.endDate);

//       default:
//         return 0;
//     }
//   });


//   useEffect(() => {
//     fetchMyTask()
//   }, [])

//   return (
//     <>
//       <div className="container-fluid mt-3">
//         <div className="row  align-items-center bg-white shadow-sm p-3 rounded">

//           {/* Search */}
//           <div className="col-md-4">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="🔍 Search by task name..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>

//           {/* Status Filter */}
//           <div className="col-md-3">
//             <select
//               className="form-select"
//               value={statusFilter}
//               onChange={(e) => setStatusFilter(e.target.value)}
//             >
//               <option value="All">All Status</option>
//               <option value="Pending">🟡 Pending</option>
//               <option value="Inprogress">🔵 In Progress</option>
//               <option value="Completed">🟢 Completed</option>
//             </select>
//           </div>

//           {/* Sort */}
//           <div className="col-md-3">
//             <select
//               className="form-select"
//               value={sortBy}
//               onChange={(e) => setSortBy(e.target.value)}
//             >
//               <option value="Newest">Newest</option>
//               <option value="Oldest"> Oldest</option>
//               <option value="A-Z"> A-Z</option>
//               <option value="Z-A"> Z-A</option>
//               <option value="Start Date">Start Date</option>
//               <option value="End Date"> End Date</option>
//             </select>
//           </div>

//         </div>
//       </div>




//       <div className="container mt-4">
//         <div className="card shadow-sm border-0">
//           <div className="card-header bg-dark text-white d-flex justify-content-between">
//             <h5 className="mb-0">📋 My Tasks</h5>
//             <span>Total: {filterTasks.length}</span>
//           </div>
//           <hr />
//           <table class="table">
//             <thead>
//               <tr>
//                 <th scope="col">#</th>
//                 <th scope="col">TaskID</th>
//                 <th scope="col">Title</th>
//                 <th scope="col">Status</th>
//                 <th scope="col">StartDate</th>
//                 <th scope="col">EndDate</th>
//                 <th scope='col'>Details</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filterTasks?.map((task, i) => (
//                 <tr>
//                   <th scope="row">{i + 1}</th>
//                   <td>{task.taskID}</td>
//                   <td>{task.Task.title}</td>
//                   <td > <span className={`status-badge ${task.Task.status} `}>{task.Task.status}</span></td>
//                   <td>{task.Task.startDate}</td>
//                   <td>{task.Task.endDate}</td>
//                   <td>  <Link
//                     to={`/dashboard/taskDetails/${task.Task.task_id}`}
//                     className="btn btn-warning"
//                   >
//                     Explore
//                   </Link></td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//           </div>
//         </div>

//       </>
//       )
// }

//       export default Mytasks


import React, { useEffect, useState } from 'react'
import { getTasksByUSer } from '../api/AssignTask';
import { Link } from 'react-router-dom';

const Mytasks = () => {
  const [mytask, setMyTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");



  const fetchMyTask = async () => {
    try {
      const res = await getTasksByUSer();
      setMyTasks(res);
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  const filterTasks = mytask.filter((t) => {
    const searchTask = t.Task?.title?.toLowerCase().includes(search.toLowerCase()) || t?.Task?.description?.toLowerCase().includes(search.toLowerCase())

    const StatusMatch = statusFilter === 'All' || t.Task?.status === statusFilter;

    return searchTask && StatusMatch;
  }).sort((a, b) => {
    switch (sortBy) {
      case "Newest":
        return new Date(b.createdAt) - new Date(a.createdAt); // ✅ fixed

      case "Oldest":
        return new Date(a.createdAt) - new Date(b.createdAt); // ✅ fixed

      case "A-Z":
        return (a.Task?.title || "").localeCompare(b.Task?.title || "");

      case "Z-A":
        return (b.Task?.title || "").localeCompare(a.Task?.title || "");

      case "Start Date":
        return new Date(a.Task?.startDate) - new Date(b.Task?.startDate);

      case "End Date":
        return new Date(a.Task?.endDate) - new Date(b.Task?.endDate);

      default:
        return 0;
    }
  });


  useEffect(() => {
    fetchMyTask()
  }, [])

  return (
    <>
      <div className="container-fluid mt-3">
        <div className="row g-2 align-items-center bg-white shadow-sm p-3 rounded">

          {/* Search */}
          <div className="col-12 col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="🔍 Search by task name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Status Filter */}
          <div className="col-12 col-md-3">
            <select
              className="form-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Pending">🟡 Pending</option>
              <option value="Inprogress">🔵 In Progress</option>
              <option value="Completed">🟢 Completed</option>
            </select>
          </div>

          {/* Sort */}
          <div className="col-12 col-md-3">
            <select
              className="form-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="Newest">Newest</option>
              <option value="Oldest"> Oldest</option>
              <option value="A-Z"> A-Z</option>
              <option value="Z-A"> Z-A</option>
              <option value="Start Date">Start Date</option>
              <option value="End Date"> End Date</option>
            </select>
          </div>

        </div>
      </div>




      <div className="container mt-4">
        <div className="card shadow-sm border-0">
          <div className="card-header bg-dark text-white d-flex flex-wrap justify-content-between align-items-center gap-2">
            <h5 className="mb-0">📋 My Tasks</h5>
            <span>Total: {filterTasks.length}</span>
          </div>
          <hr />
          <div className="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">TaskID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Status</th>
                  <th scope="col">StartDate</th>
                  <th scope="col">EndDate</th>
                  <th scope='col'>Details</th>
                </tr>
              </thead>
              <tbody>
                {filterTasks?.map((task, i) => (
                  <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{task.taskID}</td>
                    <td>{task.Task.title}</td>
                    <td > <span className={`status-badge ${task.Task.status} `}>{task.Task.status}</span></td>
                    <td>{task.Task.startDate}</td>
                    <td>{task.Task.endDate}</td>
                    <td>  <Link
                      to={`/dashboard/taskDetails/${task.Task.task_id}`}
                      className="btn btn-warning"
                    >
                      Explore
                    </Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </>
  )
}

export default Mytasks