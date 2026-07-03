// import { useEffect, useState } from "react";
// import { FaUsers } from "react-icons/fa";
// import { FaTasks } from "react-icons/fa";
// import { CompletedTask, getTasks, getUser, TotalTask, TotalUser } from "../api/api";
// import { getTasksByUSer, getTaskWithUsers } from "../api/AssignTask";

// const DashboardHome = () => {
//   const [totalTasks, setTotalTask] = useState();
//   const [totalUser, setTotalUser] = useState();
//   const [cTask, setCTask] = useState();
//   const [user, SetUser] = useState();
//   const [task, setTask] = useState();

//   const pendingCount = Array.isArray(task)
//     ? task.filter(t => t.Task?.status === "Pending").length
//     : 0;

//   const InProgress = Array.isArray(task)
//     ? task.filter(t => t.Task?.status === 'Inprogress').length
//     : 0

//   const Completed = Array.isArray(task)
//     ? task.filter(t => t.Task?.status === 'Completed').length : 0

//   const allTasks = async () => {
//     try {
//       const res = await getTasksByUSer();
//       console.log(res)
//       setTask(res)
//     } catch (error) {
//       console.log(error)
//     }
//   }


//   const fetchCTask = async () => {
//     const res = await CompletedTask();
//     console.log(res)
//     setCTask(res)
//   }

//   const Fetchuser = async (req, res) => {
//     try {
//       const res = await getUser();
//       SetUser(res?.data?.loggedUser);

//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const fetch = async () => {
//     const res = await TotalTask();
//     console.log(res)
//     setTotalTask(res);
//   }


//   const TotalUserFetch = async () => {
//     const res = await TotalUser()
//     console.log(res)
//     setTotalUser(res)
//   }

//   useEffect(() => {
//     fetch();
//   }, [])

//   useEffect(() => {
//     TotalUserFetch();
//   }, [])

//   useEffect(() => {
//     fetchCTask();
//   }, [])

//   useEffect(() => {
//     Fetchuser();
//   }, [])

//   useEffect(() => {
//     allTasks();
//   }, [])
//   return (
//     <div className="d-flex">



//       {user?.role === 'admin' && (
//         <div className="custom-card m-3 d-flex align-items-center justify-content-evenly px-4">
//           {/* Icon Box */}
//           <div className="icon-box d-flex align-items-center justify-content-center">
//             <FaUsers size={30} />
//           </div>
//           {/* Text */}
//           <div className="ms-3 text-section">
//             <h3>{totalUser}</h3>
//             <p>Users</p>
//           </div>
//         </div>
//       )}


//       {/* tasks */}
//       <div className="custom-card m-3 d-flex align-items-center justify-content-evenly px-4">
//         {/* Icon Box */}
//         <div className="icon-box d-flex align-items-center justify-content-center">
//           <FaTasks size={30} />
//         </div>

//         {/* Text */}
//         <div className="ms-3 text-section">
//           <h3>{task?.length}</h3>
//           <p>Tasks</p>
//         </div>
//       </div>

//       {/* completed */}
//       <div className="custom-card  m-3 d-flex align-items-center justify-content-evenly px-4">
//         {/* Icon Box */}
//         <div className="icon-box p-2 d-flex align-items-center justify-content-center">
//           <FaUsers size={30} />
//         </div>

//         {/* Text */}
//         <div className="ms-3 text-section">
//           <h3>{Completed}</h3>
//           <p>Completed</p>
//         </div>
//       </div>
//       {/* pending */}
//       <div className="custom-card m-3 d-flex align-items-center justify-content-evenly px-4">
//         {/* Icon Box */}
//         <div className="icon-box d-flex align-items-center justify-content-center">
//           <FaUsers size={30} />
//         </div>

//         {/* Text */}
//         <div className="ms-3 text-section">
//           <h3> {pendingCount}</h3>
//           <p>PendingTask</p>
//         </div>
//       </div>

//       <div className="custom-card m-3 d-flex align-items-center justify-content-evenly px-4">
//         {/* Icon Box */}
//         <div className="icon-box d-flex align-items-center justify-content-center">
//           <FaUsers size={30} />
//         </div>

//         {/* Text */}
//         <div className="ms-3 text-section">
//           <h3> {InProgress}</h3>
//           <p>InProgress</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardHome;
import { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { CompletedTask, getTasks, getUser, TotalTask, TotalUser } from "../api/api";
import { getTasksByUSer, getTaskWithUsers } from "../api/AssignTask";

const DashboardHome = () => {
  const [totalTasks, setTotalTask] = useState();
  const [totalUser, setTotalUser] = useState();
  const [cTask, setCTask] = useState();
  const [user, SetUser] = useState();
  const [task, setTask] = useState();

  const pendingCount = Array.isArray(task)
    ? task.filter(t => t.Task?.status === "Pending").length
    : 0;

  const InProgress = Array.isArray(task)
    ? task.filter(t => t.Task?.status === 'Inprogress').length
    : 0

  const Completed = Array.isArray(task)
    ? task.filter(t => t.Task?.status === 'Completed').length : 0

  const allTasks = async () => {
    try {
      const res = await getTasksByUSer();
      console.log(res)
      setTask(res)
    } catch (error) {
      console.log(error)
    }
  }


  const fetchCTask = async () => {
    const res = await CompletedTask();
    console.log(res)
    setCTask(res)
  }

  const Fetchuser = async (req, res) => {
    try {
      const res = await getUser();
      SetUser(res?.data?.loggedUser);

    } catch (error) {
      console.log(error)
    }
  }

  const fetch = async () => {
    const res = await TotalTask();
    console.log(res)
    setTotalTask(res);
  }


  const TotalUserFetch = async () => {
    const res = await TotalUser()
    console.log(res)
    setTotalUser(res)
  }

  useEffect(() => {
    fetch();
  }, [])

  useEffect(() => {
    TotalUserFetch();
  }, [])

  useEffect(() => {
    fetchCTask();
  }, [])

  useEffect(() => {
    Fetchuser();
  }, [])

  useEffect(() => {
    allTasks();
  }, [])

  // Shared inline sizing so each card wraps nicely at any screen width
  // without touching the existing .custom-card CSS.
  const cardStyle = {
    flex: "0 0 220px",
    width: "220px",
  };

  return (
    <div className="d-flex flex-wrap">

      {user?.role === 'admin' && (
        <div
          className="custom-card m-3 d-flex align-items-center justify-content-evenly px-4"
          style={cardStyle}
        >
          {/* Icon Box */}
          <div className="icon-box d-flex align-items-center justify-content-center">
            <FaUsers size={30} />
          </div>
          {/* Text */}
          <div className="ms-3 text-section">
            <h3>{totalUser}</h3>
            <p>Users</p>
          </div>
        </div>
      )}


      {/* tasks */}
      <div
        className="custom-card m-3 d-flex align-items-center justify-content-evenly px-4"
        style={cardStyle}
      >
        {/* Icon Box */}
        <div className="icon-box d-flex align-items-center justify-content-center">
          <FaTasks size={30} />
        </div>

        {/* Text */}
        <div className="ms-3 text-section">
          <h3>{task?.length}</h3>
          <p>Tasks</p>
        </div>
      </div>

      {/* completed */}
      <div
        className="custom-card m-3 d-flex align-items-center justify-content-evenly px-4"
        style={cardStyle}
      >
        {/* Icon Box */}
        <div className="icon-box p-2 d-flex align-items-center justify-content-center">
          <FaUsers size={30} />
        </div>

        {/* Text */}
        <div className="ms-3 text-section">
          <h3>{Completed}</h3>
          <p>Completed</p>
        </div>
      </div>
      {/* pending */}
      <div
        className="custom-card m-3 d-flex align-items-center justify-content-evenly px-4"
        style={cardStyle}
      >
        {/* Icon Box */}
        <div className="icon-box d-flex align-items-center justify-content-center">
          <FaUsers size={30} />
        </div>

        {/* Text */}
        <div className="ms-3 text-section">
          <h3> {pendingCount}</h3>
          <p>PendingTask</p>
        </div>
      </div>

      <div
        className="custom-card m-3 d-flex align-items-center justify-content-evenly px-4"
        style={cardStyle}
      >
        {/* Icon Box */}
        <div className="icon-box d-flex align-items-center justify-content-center">
          <FaUsers size={30} />
        </div>

        {/* Text */}
        <div className="ms-3 text-section">
          <h3> {InProgress}</h3>
          <p>InProgress</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;