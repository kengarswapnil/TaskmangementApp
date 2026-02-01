import React, { useEffect, useState } from 'react'
import { getAlluser } from '../api/api'

const Users = () => {
  const [userData, setUsersData] = useState([])
  async function fetchUser(params) {
    const res = await getAlluser();
    setUsersData(res.users)
  }

  useEffect(() => {
    fetchUser();
  }, [])
  return (
    <div>
      <h4 className='text-start m-3'>Users</h4>
      <div className='border rounded m-2'>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((u, i) => (
              <tr>
                <th scope="row">{i+1}</th>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>@mdo</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
