import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DeleteTask, getAlluser, getchangeStatus, getSingleTasks, getUser } from "../api/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdPersonAddAlt } from "react-icons/md";
import Model from '../Task/Taskmodel'
import { assigenedToUSerTask, getTaskWithUsers } from "../api/AssignTask";

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTasks] = useState(null);
  const [assigenments, setAssigenments] = useState();
  const navigate = useNavigate();

  // editing status 
  const [isEditing, setisEditing] = useState(false);
  const [status, setStatus] = useState("");


  // for model 
  const [openModel, setOpenModel] = useState(false);
  const [selectUser, setSelectUSer] = useState("");
  const [user, SetUser] = useState([]);

  // confirmation model 
  const [showModel, setShowModal] = useState(false)
  const [DeleTedId, setDeleteId] = useState()

  const openDeleteModel = (id) => {
    setDeleteId(id)
    setShowModal(true)
  }

  // user
  const [profile, setProfile] = useState();



  const notify = (msg) => toast.success(msg);

  const fetchTask = async () => {
    try {
      const res = await getSingleTasks(id);
      setTasks(res);
      setStatus(res.status);
    } catch (error) {
      console.log(error);
    }
  };



  const Profile = async (req, res) => {
    try {
      const res = await getUser();
      setProfile(res?.data?.loggedUser);
      console.log(res?.data?.loggedUser)
    } catch (error) {
      console.log(error)
    }
  }



  const AssigenedTaskuser = async () => {
    try {
      const res = await getTaskWithUsers(id);
      console.log(res.assigenments)
      setAssigenments(res.assigenments);
    } catch (error) {
      console.log(error)
    }
  }


  // assigened TAsks 
 const AssigendTask = async () => {
try {
if (!selectUser || selectUser.length === 0) {
toast.error("Please select at least one user");
return;
}


// loop through selected users
for (let userId of selectUser) {
  await assigenedToUSerTask({
    userID: userId,
    taskID: task.task_id
  });
}

toast.success("Task Assigned Successfully");

fetchTask();
AssigenedTaskuser();
setOpenModel(false);
setSelectUSer([]); // reset selection

} catch (error) {
console.log(error);
}
};


  // get user
  const getUserFetch = async () => {
    try {
      const res = await getAlluser();
      SetUser(res.users)
    } catch (error) {
      console.log(error)
    }
  }


  // delete
  const handleDeleteTask = async () => {
    console.log("Task Deleted ", DeleTedId)
    try {

      await DeleteTask(DeleTedId);
      setShowModal(false)
      navigate('/dashboard/tasks')
    } catch (error) {
      console.log(error)
    }

  }

  // handle edit
  const handleEdit = () => {
    setisEditing(true)
  }

  const handleupdate = async () => {
    try {
      await getchangeStatus(id, status);
      setisEditing(false);
      fetchTask();
      notify("Status Updated Sucessfully");
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTask();
    AssigenedTaskuser();
  }, [id]);

  useEffect(() => {
    Profile()
  }, [])

  useEffect(() => {
    if (openModel) {
      getUserFetch();
    }
  }, [openModel]);

  return (
    <>
      {task && (
        <div className="task-card">

          <h4 className="task-title">{task.title}</h4>

          <p><span className="label">Description:</span> {task.description}</p>

          <p>
            <span className="label">Status:</span>

            {isEditing ? (
              <select
                className="form-select status-dropdown"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Pending">Pending</option>
                <option value="Inprogress">Inprogress</option>
                <option value="Completed">Completed</option>
              </select>
            ) : (
              <span className={`status-badge ${task.status}`}>
                {task.status}
              </span>
            )}
          </p>

          <p><span className="label">Start Date:</span> {task.startDate}</p>
          <p><span className="label">End Date:</span> {task.endDate}</p>

          <p>
            <span className="label">Members:</span>
            {assigenments?.map((assig, i) => (
              <span key={i} className="member-name">
                {assig.User.name},
              </span>
            ))}
          </p>

          <div className="btn-group-custom">

            {profile?.role === "admin" && (
              <>
                <button
                  className="btn delete-btn"
                  onClick={() => openDeleteModel(task.task_id)}
                >
                  Delete
                </button>

                <button
                  className="btn assign-btn"
                  onClick={() => setOpenModel(true)}
                >
                  <MdPersonAddAlt size={22} />
                </button>
              </>
            )}

            {!isEditing ? (
              <button className="btn edit-btn" onClick={handleEdit}>
                {profile?.role === "admin" ? "Edit" : "Status Edit"}
              </button>
            ) : (
              <>
                <button className="btn save-btn" onClick={handleupdate}>
                  Save
                </button>
                <button
                  className="btn cancel-btn"
                  onClick={() => setisEditing(false)}
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </div>
      )}
      <ToastContainer />

      <Model isOpen={openModel} onClose={() => setOpenModel(false)}>

        <p className="border p-2 rounded">{task?.title}</p>
        {/* <h5>Select User</h5> */}

        <select
          className="form-select mt-2"
          multiple
          value={selectUser}
          onChange={(e) => setSelectUSer(
            [...e.target.selectedOptions].map((option) => option.value)
               )}
        >
          <option value="">Select User</option>

          {user.map((u) => (
            <option key={u.id} value={u.id}>
              {u.name}
            </option>
          ))}
        </select>

        <button
          className="btn btn-success mt-3"
          onClick={AssigendTask}
        >
          Assign Task
        </button>

      </Model>


      {showModel && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="modal-body text-center">
                <p>⚠️ Are you sure you want to delete this task?</p>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteTask()}
                >
                  Yes, Delete
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default TaskDetails;
