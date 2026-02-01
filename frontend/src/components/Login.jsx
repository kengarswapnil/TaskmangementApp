import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getlogin } from "../api/api";

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
      localStorage.setItem("token", data.token);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    handleSubmit();
  },[])
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
      </div>
    </>
  );
};

export default Login;
