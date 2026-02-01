import { FaUsers } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
const DashboardHome = () => {
  return (
    <div className="d-flex">
      <div className="custom-card m-3 d-flex align-items-center justify-content-evenly px-4">
        {/* Icon Box */}
        <div className="icon-box d-flex align-items-center justify-content-center">
          <FaUsers size={30} />
        </div>

        {/* Text */}
        <div className="ms-3 text-section">
          <h3>5</h3>
          <p>Users</p>
        </div>
      </div>

      {/* tasks */}
       <div className="custom-card m-3 d-flex align-items-center justify-content-evenly px-4">
        {/* Icon Box */}
        <div className="icon-box d-flex align-items-center justify-content-center">
          <FaTasks size={30} />
        </div>

        {/* Text */}
        <div className="ms-3 text-section">
          <h3>5</h3>
          <p>Tasks</p>
        </div>
      </div>

      {/* completed */}
       <div className="custom-card m-3 d-flex align-items-center justify-content-evenly px-4">
        {/* Icon Box */}
        <div className="icon-box d-flex align-items-center justify-content-center">
          <FaUsers size={30} />
        </div>

        {/* Text */}
        <div className="ms-3 text-section">
          <h3>5</h3>
          <p>CompletedTask</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
