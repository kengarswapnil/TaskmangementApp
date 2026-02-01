import React, { useEffect, useState } from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { Link, Outlet, useNavigate } from "react-router-dom";
import tasknoav from "../assets/tasknova3.png";
import { getUser } from "../api/api";

const Dashboard = () => {

  const [user, setUser] = useState();

  const getUserInfo = async () => {
    const res = await getUser();
    setUser(res?.data?.loggedUser);
  }

  const navigate = useNavigate();

 const logout = () =>{
  localStorage.removeItem('token');
  navigate('/')
 }

  const userMenu = [
    {
      title: "Dashboard",
      path: "/dashboard/home",
      icon: <MdDashboardCustomize size={20} className="me-2" />,
    },
    {
      title: "My Tasks",
      path: "/dashboard/tasks",
      icon: <FaTasks size={20} className="me-2" />,
    },
  ];

  const adminMenu = [
    {
      title: "Dashboard",
      path: "/dashboard/home",
      icon: <MdDashboardCustomize size={20} className="me-2" />,
    },
    {
      title: "All Users",
      path: "/dashboard/users",
      icon: <FaUsers size={20} className="me-2" />,
    },
    {
      title: "All Tasks",
      path: "/dashboard/tasks",
      icon: <FaTasks size={20} className="me-2" />,
    },
    {
      title: "Add Tasks",
      path: "/dashboard/add-tasks",
      icon: <MdAddTask size={20} className="me-2" />,
    },
  ];

  const menus = user?.role === "admin" ? adminMenu : userMenu

  useEffect(() => {
    getUserInfo();
  }, [])


  return (
    <div>
      <div>
        {/* header */}
        <header className="d-flex justify-content-between align-items-center px-2 border-bottom w-100">
          <div className="left d-flex align-items-center">
            <img src={tasknoav} className="customLogo" alt="" />
            <p className="border text-center px-2 rounded">{user?.role}</p>
          </div>
          <div className="right">
            <button className="btn customBtn" onClick={logout}>Logout</button>
          </div>
        </header>

        {/*asidebar*/}

        <div className="d-flex ">
          <aside
            className="left border-end vh-100 bg-white"
            style={{ width: "200px" }}
          >
            <ul className="nav nav-pills flex-column mb-auto">
              {/* <li className="nav-item">
                <Link
                  to="/dashboard/home"
                  className="nav-link active m-2"
                  aria-current="page"
                >
                  <MdDashboardCustomize size={20} className="me-2" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/users"
                  className="nav-link   link-body-emphasis"
                >
                  <FaUsers size={20} className="me-2" />
                  All Users
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/tasks"
                  className="nav-link link-body-emphasis"
                >
                  <FaTasks size={20} className="me-2" />
                  All Tasks
                </Link>
              </li> */}
              {menus.map((m, i) => (
                <li>
                  <Link
                    to={m.path}
                    className="nav-link link-body-emphasis"
                  >
                    {m.icon}
                    {m.title}
                  </Link>
                </li>
              ))}

            </ul>
          </aside>

          {/* mainpages  */}
          <main className="flex-grow-1">
            <div className="">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
