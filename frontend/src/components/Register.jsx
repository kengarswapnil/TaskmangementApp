import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { getRegister } from "../api/api";

const Register = () => {

  

  const handleOnchange = (req, res) => {
    setFormData({
      ...formData, [e.target.value]: e.target.value
    })
  }

  const handleSubmit = async () => {
    try {
      const res = await getRegister(formData);
      navigate('/');
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleSubmit();
  }, [])

  return (
    <div>
      <div className="customLogin mt-5 rounded">
        <h4 classNameName="text-center">Register</h4>
        <div className=" mb-3">
          <label for="floatingInput">Name</label>
          <input type="text" name="name" onChange={handleOnchange}
            value={formData.name}
            className="form-control " />
        </div>
        <div className=" mb-3">
          <label for="floatingInput">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleOnchange} className="form-control " />
        </div>
        <div className="mb-3">
          <label for="floatingPassword">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleOnchange}
            className="form-control"
            id="floatingPassword"
          />
        </div>
        <button className="mb-3 btn btn-primary w-100">Regitser</button>
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
