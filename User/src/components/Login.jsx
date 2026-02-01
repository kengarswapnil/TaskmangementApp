import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div className='customLogin mt-5 rounded'>
        <h4 className='text-center'>
          <span className='customColor'>User</span> Login</h4>
        <div className=" mb-3">
          <label for="floatingInput">Email</label>
          <input type="email" className="form-control " />

        </div>
        <div className="mb-3">
          <label for="floatingPassword">Password</label>
          <input type="password" className="form-control" id="floatingPassword"  />

        </div>
        <button className='mb-3 btn btn-primary w-100'>Login</button>
        <p>
           Don't have an account? <Link to='/register'>Register</Link>
        </p>
      </div>
    </>
  )
}

export default Login
