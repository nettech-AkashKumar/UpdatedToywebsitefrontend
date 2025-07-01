// import React, {useState} from "react";
// import "./forgotpassword.css"
// import {useNavigate, useParams } from "react-router-dom";
// import login_img from "../../../assets/image/website-logo.png";
// import { IoMdEye, IoMdEyeOff } from "react-icons/io";
// import {toast} from 'react-toastify'
// import BASE_URL from '../../../Config/config.js'

// const ResetPassword = () => {
//     const {token} = useParams();
//     console.log('token', token)
//     const navigate = useNavigate();
//     const [password, setPassword] = useState("")
//     const [confirmPassword, setConfirmPassword] = useState("")

//     const handleResetPassword = async (e) => {
//         e.preventDefault();
//         if(password !== confirmPassword) {
//             toast.error("Password do not match")
//             REACT_ROUTER_VERSION;
//         }
//          try {
//           const response = await fetch(`${BASE_URL}/api/users/resetpassword/${token}`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({password})
//           });
//           const result = await response.json();
//           if(response.ok) {
//             toast.success("Password reset successfully!")
//             setTimeout(() => navigate('/login'), 2000)
//           }else {
//             toast.error(result.message || "Invalid or expired token" )
//           }
//          }catch(error) {
//             toast.error("Something went wrong")
//          }
//     }
 



//     const [isShowPassword, setIsShowPassword] = useState(false);
//   return (
//     <div>
//      <div className="login-conatiner d-flex justify-content-center align-items-center" style={{width:"100%", height:"100vh"}}> 
//          <div
//         className="login forgot-password"
//         style={{
//           fontFamily: '"Poppins", sans-serif',
//           padding: "28px 30px",  
//         }}
//       > 
//         <div className="login-headline text-center py-4">
//             <div className="d-flex justify-content-center"> <img className="img-fluid " style={{width:"60px"}} src={login_img} alt="login_img" /></div>
//           <h3 className="d-flex gap-2 justify-content-center align-items-center  fs-4">
//             <span>Reset Password</span>
          
            
//           </h3>
          
//         </div>
//         <form action="" onSubmit={handleResetPassword} className="login-form">
//             <div className="loginpass">
//                 <input type={isShowPassword ? "text" : "password"} id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New Password" /><span onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? <IoMdEyeOff /> : <IoMdEye />}</span>
//                 </div>
//               <div className="loginpass">
//                 <input type={isShowPassword ? "text" : "password"} id="cpassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}  placeholder="Confirm New Password" /><span onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? <IoMdEyeOff /> : <IoMdEye />}</span>
//                 </div>
//         <button type="submit" className="continuebtn">Reset Password</button>
//         </form>

//       </div>
//      </div>
//     </div>
//   );
// };

// export default ResetPassword;




import React, { useState } from "react";
import "./forgotpassword.css";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import login_img from "../../../assets/image/website-logo.png";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { toast } from "react-toastify";
import BASE_URL from "../../../Config/config.js";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);

  const location = useLocation();
  const email = location.state?.email;

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      return toast.error("Both password fields are required");
    }

    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      const response = await fetch(`${BASE_URL}/api/users/resetpassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password })
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Password reset successfully!");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        toast.error(result.message || "Invalid or expired token");
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  return (
    <div className="login-conatiner d-flex justify-content-center align-items-center" style={{ width: "100%", height: "100vh" }}>
      <div
        className="login forgot-password"
        style={{
          fontFamily: '"Poppins", sans-serif',
          padding: "28px 30px"
        }}
      >
        <div className="login-headline text-center py-4">
          <div className="d-flex justify-content-center">
            <img className="img-fluid" style={{ width: "60px" }} src={login_img} alt="login_img" />
          </div>
          <h3 className="d-flex gap-2 justify-content-center align-items-center fs-4">
            <span>Reset Password</span>
          </h3>
        </div>
        <form onSubmit={handleResetPassword} className="login-form">
          <div className="loginpass">
            <input
              type={isShowPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
            />
            <span onClick={() => setIsShowPassword(!isShowPassword)}>
              {isShowPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </span>
          </div>
          <div className="loginpass">
            <input
              type={isShowPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm New Password"
            />
            <span onClick={() => setIsShowPassword(!isShowPassword)}>
              {isShowPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </span>
          </div>
          <button type="submit" className="continuebtn">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
