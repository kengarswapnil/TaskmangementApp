import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getlogin } from "../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handheOnchnage = (e) => {
    setloginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      const data = await getlogin(loginData);

      if (!data.success) {
        toast.error(data.message || "Invalid email or password ❌");
        return;
      }

      toast.success("Login Successful 🎉");
      localStorage.setItem("token", data.token);

      setTimeout(() => {
        navigate("/dashboard/home");
      }, 1500);
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.message || "Invalid email or password ❌"
      );
    }
  };


  return (
    <>
      <div className="customLogin mt-5 rounded">
        <h4 className="text-center">
          <span className="customColor">User</span> Login
        </h4>
        <div className=" mb-3">
          <label for="floatingInput">Email</label>
          <input type="email" name="email" value={loginData.email}
            onChange={handheOnchnage}
            className="form-control " />
        </div>
        <div className="mb-3">
          <label for="floatingPassword">Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handheOnchnage}
            className="form-control"
            id="floatingPassword"
          />
        </div>
        <button className="mb-3 btn btn-primary w-100" onClick={handleSubmit}>Login</button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </>
  );
};

export default Login;
