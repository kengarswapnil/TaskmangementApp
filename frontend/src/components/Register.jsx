import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { getRegister } from "../api/api";

const Register = () => {
  const navigate = useNavigate();
  const [preview, setPreview] = useState();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    ProfileImg: ""
  })

  const handleOnchange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'ProfileImg') {
      setFormData({
        ...formData, ProfileImg: files[0]
      })
      setPreview(URL.createObjectURL(files[0]))
    } else {
      setFormData({
        ...formData, [name]: value
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.name)
      data.append("email", formData.email)
      data.append("password", formData.password)
      data.append("ProfileImg", formData.ProfileImg)
      const res = await getRegister(data);
      navigate('/');
    } catch (error) {
      console.log(error)
    }
  }

  // useEffect(() => {
  //   handleSubmit();
  // }, [])

  return (
    <div>
      <form className="customLogin mt-5 rounded" onSubmit={handleSubmit}>
        <h4 className="text-center">Register</h4>
        <div className="text-center mb-3">
          <img
            src={
              preview
                ? preview
                : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
            }
            alt="profile"
            className="rounded-circle"
            width="70"
            height="70"
          />
        </div>
        <div className=" mb-3">
          <label for="floatingInput">Name</label>
          <input type="text" name="name" id="floatingInput" onChange={handleOnchange}
            value={formData.name}
            className="form-control " />
        </div>
        <div className=" mb-3">
          <label for="floatingEmail">Email</label>
          <input type="email" name="email" id="floatingEmail"
            value={formData.email} onChange={handleOnchange} className="form-control " />
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

        <div className="mb-3">
          <label for="floatingImg">ProfileImg</label>
          <input
            type="file"
            name="ProfileImg"
            onChange={handleOnchange}
            className="form-control"
            id="floatingImg"
          />
        </div>
        <button className="mb-3 btn btn-primary w-100">Regitser</button>
        <p>
          Already have an account? <Link to="/">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
