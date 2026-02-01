import React from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import tasknoav from "../assets/tasknova3.png";

const Dashboard = () => {
  return (
    <div>
      <div>
        <header className="d-flex justify-content-between align-items-center px-2 border-bottom w-100">
          <div className="left d-flex align-items-center">
            <img src={tasknoav} className="customLogo" alt="" />
            <p className="border text-center px-2 rounded">Admin</p>
          </div>
          <div className="right">
            <button className="btn customBtn">Logout</button>
          </div>
        </header>

        {/* main */}

        <div className="d-flex ">
          <aside
            className="left border-end vh-100 bg-white"
            style={{ width: "200px" }}
          >
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
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
              </li>
              <li>
                <Link
                  to="/dashboard/add-tasks"
                  className="nav-link link-body-emphasis"
                >
                  <MdAddTask size={20} className="me-2" />
                  Add Tasks
                </Link>
              </li>
              <li></li>
            </ul>
          </aside>

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
