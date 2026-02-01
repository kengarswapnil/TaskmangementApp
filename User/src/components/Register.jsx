import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <div classNameName='customLogin mt-5 rounded'>
        <h4 classNameName='text-center'>Register</h4>
        <div className=" mb-3">
          <label for="floatingInput">Name</label>
          <input type="text" className="form-control " />

        </div>
        <div className=" mb-3">
          <label for="floatingInput">Email</label>
          <input type="email" className="form-control " />

        </div>
        <div className="mb-3">
          <label for="floatingPassword">Password</label>
          <input type="password" className="form-control" id="floatingPassword" />
        </div>
        <button classNameName='mb-3 btn btn-primary w-100'>Regitser</button>
        <p>
          Already have an account? <Link to='/'>Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
