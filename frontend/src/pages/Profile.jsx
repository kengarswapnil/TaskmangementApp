// import React, { useEffect, useState } from "react";
// import { getUser, UpdateProfile, updatePssword } from "../api/api";
// import { FaUser } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { FaUserShield } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";



// const Profile = () => {
//   const [profile, setProfile] = useState();
//   const [updateProfile, setupdateProfile] = useState();
//   const [newPassword, setNewPassword] = useState();
//   const [oldPassword, setOldPassword] = useState();

//   // edit 
//   const [isEdit, setIsEdit] = useState(false);
//   const [name, setName] = useState();
//   const [file, setFile] = useState(null);

//   const navigate = useNavigate();


//   const Profile = async (req, res) => {
//     try {
//       const res = await getUser();
//       setProfile(res?.data?.loggedUser);
//       console.log(res?.data?.loggedUser);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleChnagePassword = async (e) => {
//     e.preventDefault();  
//     try {

//       const res = await updatePssword({
//        oldpassword: oldPassword, 
//        newpassword:newPassword
//       });
//       console.log(res)
//       setNewPassword("")
//       setOldPassword("")
//     } catch (error) {
//       console.log(error)
//     }
//   }



//   const updateP = async () => {
//     try {

//       const formData = new FormData();
//       formData.append("name", name)
//       if (file) {
//         formData.append("ProfileImg", file);
//       }
//       const res = await UpdateProfile(formData);
//       setupdateProfile(res.user);   // update UI immediately
//       setIsEdit(false);

//       navigate('/dashboard/home')

//       // ❌ REMOVE navigation (or delay it)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   useEffect(() => {
//     Profile();
//   }, []);

//   useEffect(() => {
//     if (profile) {
//       setName(profile.name);
//     }
//   }, [profile]);
//   return (
//     <>
//       <div>
//         <div>
//           {profile ? (
//             <div className="border m-3 p-4  w-50 rounded profile-card">
//               <div className="d-flex justify-content-between gap-3 p-2 rounded profile-header">

//                 <div className="d-flex gap-3">
//                   <div>
//                     {isEdit ? (
//                       <>
//                         <label htmlFor="fileInput">
//                           <img
//                             src={
//                               file
//                                 ? URL.createObjectURL(file)
//                                 : profile.ProfileImg
//                             }
//                             className="customProfile"
//                             style={{ cursor: "pointer" }}
//                             alt=""
//                           />
//                         </label>

//                         <input
//                           type="file"
//                           id="fileInput"
//                           hidden
//                           onChange={(e) => setFile(e.target.files[0])}
//                         />
//                       </>
//                     ) : (
//                       <img src={profile.ProfileImg} className="customProfile" alt="" />
//                     )}
//                   </div>
//                   <div>
//                     <b>{profile.name}</b>
//                     <span> <p className="border text-center px-2 rounded icon-bg">{profile?.role}</p></span>
//                   </div>
//                 </div>


//                 <div>
//                   {isEdit ? (
//                     <>
//                       <button className="btn btn-primary me-2" onClick={updateP}>
//                         Save
//                       </button>
//                       <button className="btn btn-secondary" onClick={() => setIsEdit(false)}>
//                         Cancel
//                       </button>
//                     </>
//                   ) : (
//                     <button className="btn btn-success" onClick={() => setIsEdit(true)}>
//                       Edit
//                     </button>
//                   )}
//                 </div>

//               </div>
//               <hr />
//               <div className="d-flex">
//                 <div className="customProfile2 text-primary icon-bg"><FaUser /></div>
//                 {isEdit ? (
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                   />
//                 ) : (
//                   <p> Name: <br /> <span> <b> {profile.name}</b></span></p>
//                 )}
//               </div>


//               <div className="d-flex">
//                 <div className="customProfile2 text-primary icon-bg"><MdEmail /></div>
//                 <div><p> Email: <br /> <span> <b> {profile.email}</b></span></p></div>
//               </div>

//               <div className="d-flex">
//                 <div className="customProfile2 text-primary icon-bg"><FaUserShield size={20} /></div>
//                 <div><p> Role: <br /> <span> <b> {profile.role}</b></span></p></div>
//               </div>

//             </div>
//           ) : (
//             <p>Loading...</p>
//           )}
//         </div>
//       </div>

//       {/* changr password  */}

//       <form className="container my-4 border p-3 rounded" onSubmit={handleChnagePassword} >
//         <div className="row">
//           <div className="col-6">
//             {/* <label htmlFor="changePapp">Old Password</label> */}
//             <div class="form-floating mb-3">
//               <input type="password" class="form-control" onChange={(e) => setOldPassword(e.target.value)} id="floatingInput" placeholder="name@example.com" />
//               <label for="floatingInput">Old password</label>
//             </div>
//           </div>
//           <div className="col-6">
//             {/* <label htmlFor="changePapp">New  Password</label> */}
//             <div class="form-floating mb-3">
//               <input type="password" class="form-control" onChange={(e) => setNewPassword(e.target.value)} id="floatingInput" placeholder="name@example.com" />
//               <label for="floatingInput">New Password</label>
//             </div>
//           </div>
//         </div>
//         <button className="btn btn-success">Change Password</button>
//       </form>

//     </>
//   );
// };

// export default Profile;



import React, { useEffect, useState } from "react";
import { getUser, UpdateProfile, updatePssword } from "../api/api";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Profile = () => {
  const [profile, setProfile] = useState();
  const [updateProfile, setupdateProfile] = useState();
  const [newPassword, setNewPassword] = useState();
  const [oldPassword, setOldPassword] = useState();

  // edit 
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState();
  const [file, setFile] = useState(null);

  const navigate = useNavigate();


  const Profile = async (req, res) => {
    try {
      const res = await getUser();
      setProfile(res?.data?.loggedUser);
      console.log(res?.data?.loggedUser);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChnagePassword = async (e) => {
    e.preventDefault();  
    try {

      const res = await updatePssword({
       oldpassword: oldPassword, 
       newpassword:newPassword
      });
     toast.success("Password changed successfully");

      console.log(res)
      setNewPassword("")
      setOldPassword("")
    } catch (error) {
      console.log(error)
       toast.error(error?.response?.data?.message || "Failed to change password");
    }
  }



  const updateP = async () => {
    try {

      const formData = new FormData();
      formData.append("name", name)
      if (file) {
        formData.append("ProfileImg", file);
      }
      const res = await UpdateProfile(formData);
      setupdateProfile(res.user);   // update UI immediately
      setIsEdit(false);

      navigate('/dashboard/home')

      // ❌ REMOVE navigation (or delay it)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    Profile();
  }, []);

  useEffect(() => {
    if (profile) {
      setName(profile.name);
    }
  }, [profile]);
  return (
    <>
      <div>
         <ToastContainer position="top-right" autoClose={3000} />
        <div>
          {profile ? (
            <div className="border m-3 p-4 w-100 w-md-50 rounded profile-card">
              <div className="d-flex flex-wrap justify-content-between gap-3 p-2 rounded profile-header">

                <div className="d-flex gap-3">
                  <div>
                    {isEdit ? (
                      <>
                        <label htmlFor="fileInput">
                          <img
                            src={
                              file
                                ? URL.createObjectURL(file)
                                : profile.ProfileImg
                            }
                            className="customProfile"
                            style={{ cursor: "pointer" }}
                            alt=""
                          />
                        </label>

                        <input
                          type="file"
                          id="fileInput"
                          hidden
                          onChange={(e) => setFile(e.target.files[0])}
                        />
                      </>
                    ) : (
                      <img src={profile.ProfileImg} className="customProfile" alt="" />
                    )}
                  </div>
                  <div>
                    <b>{profile.name}</b>
                    <span> <p className="border text-center px-2 rounded icon-bg">{profile?.role}</p></span>
                  </div>
                </div>


                <div>
                  {isEdit ? (
                    <>
                      <button className="btn btn-primary me-2" onClick={updateP}>
                        Save
                      </button>
                      <button className="btn btn-secondary" onClick={() => setIsEdit(false)}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button className="btn btn-success" onClick={() => setIsEdit(true)}>
                      Edit
                    </button>
                  )}
                </div>

              </div>
              <hr />
              <div className="d-flex">
                <div className="customProfile2 text-primary icon-bg"><FaUser /></div>
                {isEdit ? (
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                ) : (
                  <p> Name: <br /> <span> <b> {profile.name}</b></span></p>
                )}
              </div>


              <div className="d-flex">
                <div className="customProfile2 text-primary icon-bg"><MdEmail /></div>
                <div><p> Email: <br /> <span> <b> {profile.email}</b></span></p></div>
              </div>

              <div className="d-flex">
                <div className="customProfile2 text-primary icon-bg"><FaUserShield size={20} /></div>
                <div><p> Role: <br /> <span> <b> {profile.role}</b></span></p></div>
              </div>

            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

      {/* changr password  */}

      <form className="container my-4 border p-3 rounded" onSubmit={handleChnagePassword} >
        <div className="row">
          <div className="col-12 col-sm-6">
            {/* <label htmlFor="changePapp">Old Password</label> */}
            <div class="form-floating mb-3">
              <input type="password" class="form-control" onChange={(e) => setOldPassword(e.target.value)} id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">Old password</label>
            </div>
          </div>
          <div className="col-12 col-sm-6">
            {/* <label htmlFor="changePapp">New  Password</label> */}
            <div class="form-floating mb-3">
              <input type="password" class="form-control" onChange={(e) => setNewPassword(e.target.value)} id="floatingInput" placeholder="name@example.com" />
              <label for="floatingInput">New Password</label>
            </div>
          </div>
        </div>
        <button className="btn btn-success">Change Password</button>
      </form>

    </>
  );
};

export default Profile;