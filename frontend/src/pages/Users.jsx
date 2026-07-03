// import React, { useEffect, useState } from 'react'
// import { DeleteUser, getAlluser } from '../api/api'
// import { MdDelete } from "react-icons/md";
// import { useNavigate } from 'react-router-dom';


// const Users = () => {
//   const [userData, setUsersData] = useState()
//   const navigate = useNavigate();


//   async function fetchUser(params) {
//     const res = await getAlluser();
//     setUsersData(res.users)
//   }


//   const userDelete = async (id) => {
//     try {
//       const res = await DeleteUser(id)
//       console.log("deleted", id)
//       setUsersData(null);
//       navigate('/dashboard/home')
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   useEffect(() => {
//     fetchUser();
//   }, [])
//   return (
//     <>
//       {userData?.length > 0 ? (<>
//         <div>
//           <h4 className='text-start m-3 fw-bold text-primary'>👥 Users</h4>
//           <div className='border rounded m-2'>
//             <table className="table  table-hover align-middle mb-0">
//               <thead className='table-light'>
//                 <tr>
//                   <th scope="col">#</th>
//                   <th scope="col">Name</th>
//                   <th scope="col">Email</th>
//                   <th scope="col">Role</th>
//                   <th scope='col'>Delete</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {userData?.map((u, i) => (
//                   <tr>
//                     <th scope="row">{i + 1}</th>
//                     <td>{u.name}</td>
//                     <td>{u.email}</td>
//                     <td > <span className={`status-badge ${u.role}`}> {u.role}</span></td>
//                     <td><button className='btn btn-sm btn-outline-danger' onClick={() => userDelete(u.id)}><MdDelete size={18} /></button></td>
//                   </tr>
//                 ))}

//               </tbody>
//             </table>
//           </div>
//         </div></>) : (<>
//          <div>
//           <p className='text-center m-3 custom-bg'>No User Available</p>
//          </div>
//         </>)}

//     </>
//   )
// }

// export default Users


import React, { useEffect, useState } from 'react'
import { DeleteUser, getAlluser } from '../api/api'
import { MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Users = () => {
  const [userData, setUsersData] = useState()
  const navigate = useNavigate();


  async function fetchUser(params) {
    const res = await getAlluser();
    setUsersData(res.users)
  }


  const userDelete = async (id) => {
    try {
      const res = await DeleteUser(id)
      console.log("deleted", id)
      setUsersData(null);
      navigate('/dashboard/home')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUser();
  }, [])
  return (
    <>
      {userData?.length > 0 ? (<>
        <div>
          <h4 className='text-start m-3 fw-bold text-primary'>👥 Users</h4>
          <div className='border rounded m-2 table-responsive'>
            <table className="table  table-hover align-middle mb-0">
              <thead className='table-light'>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope='col'>Delete</th>
                </tr>
              </thead>
              <tbody>
                {userData?.map((u, i) => (
                  <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td > <span className={`status-badge ${u.role}`}> {u.role}</span></td>
                    <td><button className='btn btn-sm btn-outline-danger' onClick={() => userDelete(u.id)}><MdDelete size={18} /></button></td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div></>) : (<>
         <div>
          <p className='text-center m-3 custom-bg'>No User Available</p>
         </div>
        </>)}

    </>
  )
}

export default Users