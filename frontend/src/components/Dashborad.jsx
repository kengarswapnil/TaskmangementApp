// import React, { useContext, useEffect, useState } from "react";
// import { MdDashboardCustomize } from "react-icons/md";
// import { FaUsers } from "react-icons/fa";
// import { FaTasks } from "react-icons/fa";
// import { MdAddTask } from "react-icons/md";
// import { Link, Outlet, useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import tasknoav from "../assets/tasknova3.png";
// import { getUser } from "../api/api";
// import { FaCircleUser } from "react-icons/fa6";
// import { ThemeContext } from "../context/ThemeProvider";

// const Dashboard = () => {
//   const [showSidebar, setShowSidebar] = useState(false);
//   const { theme, ChangeTheme } = useContext(ThemeContext);
//   const [user, setUser] = useState(ThemeContext);

//   const getUserInfo = async () => {
//     const res = await getUser();
//     setUser(res?.data?.loggedUser);
//   }

//   const navigate = useNavigate();
//   const logout = () => {
//     localStorage.removeItem('token');
//     navigate('/')
//   }

//   const userMenu = [
//     {
//       title: "Dashboard",
//       path: "/dashboard/home",
//       icon: <MdDashboardCustomize size={20} className="me-2" />,
//     },
//     {
//       title: "My Tasks",
//       path: "/dashboard/mytasks",
//       icon: <FaTasks size={20} className="me-2" />,
//     },
//   ];

//   const adminMenu = [
//     {
//       title: "Dashboard",
//       path: "/dashboard/home",
//       icon: <MdDashboardCustomize size={20} className="me-2" />,
//     },
//     {
//       title: "All Users",
//       path: "/dashboard/users",
//       icon: <FaUsers size={20} className="me-2" />,
//     },
//     {
//       title: "All Tasks",
//       path: "/dashboard/tasks",
//       icon: <FaTasks size={20} className="me-2" />,
//     },
//     {
//       title: "Add Tasks",
//       path: "/dashboard/add-tasks",
//       icon: <MdAddTask size={20} className="me-2" />,
//     },
//      {
//       title: "My Tasks",
//       path: "/dashboard/mytasks",
//       icon: <FaTasks size={20} className="me-2" />,
//     }
//   ];

//   const menus = user?.role === "admin" ? adminMenu : userMenu

//   useEffect(() => {
//     getUserInfo();
//   }, [])


//   return (
//     <div>
//       <div>


//         <header className={`d-flex flex-wrap justify-content-between align-items-center px-3 py-2 border-bottom  shadow-sm w-100 ${theme === 'light' ? 'bg-white' : 'bg-dark text-light'}`}>
//           {/* LEFT */}
//           <div className="left d-flex align-items-center gap-3">

//             <img src={tasknoav} className="customLogo" alt="logo" />

//             <p className="border text-center px-2 rounded">{user?.role}</p>
//           </div>

//           {/* RIGHT */}
//           <div className="right d-flex align-items-center gap-3 flex-wrap">

//             <Link
//               to='/dashboard/Profile'
//               className="d-flex align-items-center text-decoration-none hover-profile"
//             >
//               {user?.ProfileImg ? (
//                 <img
//                   src={user.ProfileImg}
//                   className="customProfile2 border border-2 "
//                   alt="profile"
//                 />
//               ) : (
//                 <div className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center" style={{ width: "35px", height: "35px" }}>
//                   {user?.name?.charAt(0).toUpperCase()}
//                 </div>
//               )}

//               <span className="customUser text-dark fw-semibold ms-2">
//                 {user?.name}
//               </span>
//             </Link>

//             <button
//               className="btn btn-danger d-flex align-items-center gap-2 px-3 py-1"
//               onClick={logout}
//             >
//               Logout
//             </button>

//           </div>
//         </header>

//         {/*asidebar*/}

//         <div className={`d-flex flex-column flex-md-row ${theme === 'light'?'bg-light':'bg-dark text-light'}`} style={{ height: "calc(100vh - 60px)" }}>
//           <aside className="left border-end bg-white w-100 w-md-auto" style={{ maxWidth: "200px" }}>
//             <ul className="nav nav-pills flex-column flex-md-column flex-row justify-content-around mb-auto px-2">
//               {menus.map((m, i) => (
//                 <li className="pt-2 pt-md-3">
//                   <NavLink
//                     to={m.path}
//                     className={({ isActive }) =>
//                       isActive
//                         ? "nav-link active bg-primary text-white d-flex align-items-center gap-2"
//                         : "nav-link text-dark d-flex align-items-center gap-2"
//                     }
//                   >
//                     {m.icon}
//                     {m.title}
//                   </NavLink>
//                 </li>
//               ))}

//             </ul>
//           </aside>

//           {/* mainpages  */}
//           <main className="flex-grow-1 overflow-auto p-3">
//             <div
//             >
//               <Outlet />
//             </div>
//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useContext, useEffect, useState } from "react";
import { MdDashboardCustomize } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import tasknoav from "../assets/tasknova3.png";
import { getUser } from "../api/api";
import { ThemeContext } from "../context/ThemeProvider";

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const { theme, ChangeTheme } = useContext(ThemeContext);
  const [user, setUser] = useState(null);

  const getUserInfo = async () => {
    const res = await getUser();
    setUser(res?.data?.loggedUser);
  };

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const userMenu = [
    {
      title: "Dashboard",
      path: "/dashboard/home",
      icon: <MdDashboardCustomize size={20} className="me-2" />,
    },
    {
      title: "My Tasks",
      path: "/dashboard/mytasks",
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
    {
      title: "My Tasks",
      path: "/dashboard/mytasks",
      icon: <FaTasks size={20} className="me-2" />,
    },
  ];

  const menus = user?.role === "admin" ? adminMenu : userMenu;

  useEffect(() => {
    getUserInfo();
  }, []);

  // Close the mobile drawer whenever a nav link is clicked
  const handleNavClick = () => setShowSidebar(false);

  return (
    <div>
      {/* HEADER */}
      <header
        className={`d-flex justify-content-between align-items-center px-3  border-bottom shadow-sm w-100 ${
          theme === "light" ? "bg-white" : "bg-dark text-light"
        }`}
        style={{ position: "sticky", top: 0, zIndex: 1030 }}
      >
        {/* LEFT */}
        <div className="left d-flex align-items-center gap-2 gap-md-3">
          {/* Hamburger - only visible below md */}
          <button
            className="btn btn-outline-secondary d-md-none p-1"
            style={{ width: "36px", height: "36px" }}
            onClick={() => setShowSidebar((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {showSidebar ? <FaTimes /> : <FaBars />}
          </button>

          <img src={tasknoav} className="customLogo" alt="logo"  />

          <p className="border text-center px-2 rounded mb-0 d-none d-sm-block">
            {user?.role}
          </p>
        </div>

        {/* RIGHT */}
        <div className="right d-flex align-items-center gap-2 gap-md-3">
          <Link
            to="/dashboard/Profile"
            className="d-flex align-items-center text-decoration-none hover-profile"
          >
            {user?.ProfileImg ? (
              <img
                src={user.ProfileImg}
                className="customProfile2 border border-2"
                alt="profile"
              />
            ) : (
              <div
                className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center"
                style={{ width: "35px", height: "35px", flexShrink: 0 }}
              >
                {user?.name?.charAt(0).toUpperCase()}
              </div>
            )}

            {/* Hide the name on very small screens to save space */}
            <span className="customUser text-dark fw-semibold ms-2 d-none d-sm-inline">
              {user?.name}
            </span>
          </Link>

          <button
            className="btn btn-danger d-flex align-items-center gap-2 px-2 px-md-3 py-1"
            onClick={logout}
          >
            Logout
          </button>
        </div>
      </header>

      <div className="position-relative">
        {/* Overlay behind the drawer on mobile */}
        {showSidebar && (
          <div
            className="d-md-none"
            onClick={() => setShowSidebar(false)}
            style={{
              position: "fixed",
              inset: 0,
              top: "60px",
              background: "rgba(0,0,0,0.4)",
              zIndex: 1020,
            }}
          />
        )}

        <div
          className={`d-flex ${theme === "light" ? "bg-light" : "bg-dark text-light"}`}
          style={{ minHeight: "calc(100vh - 60px)" }}
        >
          {/* SIDEBAR */}
          <aside
            className={`border-end bg-white ${showSidebar ? "d-block" : "d-none"} d-md-block`}
            style={{
              width: "200px",
              flexShrink: 0,
              position: showSidebar ? "fixed" : "sticky",
              top: showSidebar ? "60px" : "60px",
              bottom: 0,
              left: 0,
              height: showSidebar ? "calc(100vh - 60px)" : "calc(100vh - 60px)",
              overflowY: "auto",
              zIndex: 1025,
              transition: "transform 0.2s ease-in-out",
            }}
          >
            <ul className="nav nav-pills flex-column mb-auto px-2 pt-2">
              {menus.map((m, i) => (
                <li className="pt-2 pt-md-3" key={i}>
                  <NavLink
                    to={m.path}
                    onClick={handleNavClick}
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active bg-primary text-white d-flex align-items-center gap-2"
                        : "nav-link text-dark d-flex align-items-center gap-2"
                    }
                  >
                    {m.icon}
                    {m.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </aside>

          {/* MAIN CONTENT */}
          <main className="flex-grow-1 overflow-auto p-2 p-md-3" >
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;