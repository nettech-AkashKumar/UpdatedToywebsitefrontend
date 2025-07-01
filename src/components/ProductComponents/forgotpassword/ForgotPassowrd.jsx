// import React, {useState} from "react";
// import "./forgotpassword.css"
// import { Link, useNavigate } from "react-router-dom";
// import login_img from "../../../assets/image/website-logo.png";
// import {toast, ToastContainer} from 'react-toastify'
// import BASE_URL from "../../../Config/config.js";


// const ForgotPassword = () => {
//   const [email, setEmail] = useState("")
//   const navigate = useNavigate()

//   const handleForgotPassword = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`${BASE_URL}/api/users/forgotpassword`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({email})
//       })
//       const result = await response.json();
//       if(response.ok) {
//         toast.success(`Password reset link sent to ${email}`, {
//           position:'top-center',
//           autoClose:5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true
//         });
//       } else {
//         toast.error(result.message || "Invalid email or user not found", {
//           position:'top-center',
//           autoClose:5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true
//         });
//       }

//     }catch(error) {
//       toast.error("Something went wrong. Please try again later", {
//         position:'top-center',
//         autoClose: 5000,
//         hideProgressBar: false,
//         draggable: true,
//         closeOnClick: true,
//         pauseOnHover: true
//       })
//     }
//   }
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
//             <span>Forgot Password</span>
          
            
//           </h3>
          
//         </div>
//         <form action="" onSubmit={handleForgotPassword} className="login-form">
//             <input className="email-login" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
//         <span className="forgotpassbtn w-100 text-end my-2" ><Link to="/login" style={{color:"#FF8272"}}>Back to Login</Link></span>
//         <button type="submit" className="continuebtn">SEND Reset Link</button>
//         </form>

//       </div>
//      </div>
//     </div>
//   );
// };

// export default ForgotPassword;


import React, {useState} from "react";
import "./forgotpassword.css"
import { Link, useNavigate } from "react-router-dom";
import login_img from "../../../assets/image/website-logo.png";
import {toast} from 'react-toastify'
import BASE_URL from "../../../Config/config.js";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("")
  const navigate = useNavigate()

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/api/users/forgotpassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email})
      })
      const result = await response.json();
      if(response.ok) {
        toast.success(`OTP sent to  ${email}`, {
          position:'top-center',
          autoClose:5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        setOtpSent(true);  //show otp field
      } else {
        toast.error(result.message || "Invalid email or user not found", {
          position:'top-center',
          autoClose:5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      }

    }catch(error) {
      toast.error("Something went wrong. Please try again later", {
        position:'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        draggable: true,
        closeOnClick: true,
        pauseOnHover: true
      })
    }
  }

  //handle verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/api/users/verifyotp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, otp})
      });
      const result = await response.json();
      if(response.ok) {
        toast.success("OTP Verified")
        navigate("/resetpassword/:token", {state: {email}});
      } else {
        toast.error(result.message || "Invalid OTP")
      }
    }catch(error) {
      toast.error("verification failed")
    }
  };
  return (
    <div>
     <div className="login-conatiner d-flex justify-content-center align-items-center" style={{width:"100%", height:"100vh"}}> 
         <div
        className="login forgot-password"
        style={{
          fontFamily: '"Poppins", sans-serif',
          padding: "28px 30px",  
        }}
      > 
        <div className="login-headline text-center py-4">
            <div className="d-flex justify-content-center"> <img className="img-fluid " style={{width:"60px"}} src={login_img} alt="login_img" /></div>
          <h3 className="d-flex gap-2 justify-content-center align-items-center  fs-4">
            <span>Forgot Password</span>
          
            
          </h3>
          
        </div>
        <form action="" onSubmit={otpSent ? handleVerifyOtp : handleSendOtp} className="login-form">
            <input className="email-login" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" disabled={otpSent} />
            {
              otpSent && (
                <input className="email-login"
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)} required
                />
              )}

        <span className="forgotpassbtn w-100 text-end my-2" ><Link to="/login" style={{color:"#FF8272"}}>Back to Login</Link></span>
        <button type="submit" className="continuebtn">{otpSent ? "Verify OTP" : "Send OTP"}</button>
        </form>

      </div>
     </div>
    </div>
  );
};

export default ForgotPassword;






















