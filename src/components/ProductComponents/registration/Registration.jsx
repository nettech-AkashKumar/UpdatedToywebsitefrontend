import React, { useState } from "react";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import login_img from "../../../assets/image/website-logo.png";
// import { IoIosEye } from "react-icons/io";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import BASE_URL from "../../../Config/config.js";

const Registration = () => {
  const registerForm = {
    name: "",
    email: "",
    password: ""
  };
  const [Data, setData] = useState(registerForm)
  const navigate = useNavigate();

  //handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: Data.name,
      email: Data.email,
      password: Data.password
    }
    try {
      const response = await fetch(`${BASE_URL}/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        toast.success("Registered Successfully", { position: 'top-center' })
        setTimeout(() => {
          setData(registerForm)
          navigate("/login")
        }, 2000)
      } else {
        toast.error(result.message || "Registration failed", { position: 'top-center' })
      }
    }
    catch (error) {
      toast.error("Something went Wrong", { position: 'top-center' })
    }
  }
    const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <div>
      <div className="login-conatiner d-flex justify-content-center align-items-center" style={{ width: "100%", height: "100vh" }}>
        <div
          className="login registration"
          style={{
            fontFamily: '"Poppins", sans-serif',
            padding: "28px 30px",


          }}
        >

          <div className="login-headline text-center py-4">
            <div className="d-flex justify-content-center"> <img className="img-fluid " style={{ width: "60px" }} src={login_img} alt="login_img" /></div>
            <h3 className="d-flex gap-2 justify-content-center align-items-center  fs-4">
              <span><Link to="/login" style={{ color: "#FF8272" }}>Log in </Link></span>
              <span style={{ color: "#5B5B5B", fontSize: "18px" }}>or</span>
              <span >Sign up</span>
            </h3>
            <p style={{ fontSize: "13px", color: "#787878" }}>Your shopping journey starts here—log in or create an account.</p>
          </div>
          <form action="" onSubmit={handleSubmit} className="login-form ">
            <input className="name-form" type="text" id="name" name="name" value={Data.name} onChange={handleChange} placeholder="Enter Your Name" />
            <input className="email-login" type="email" id="email" name="email" value={Data.email} onChange={handleChange} placeholder="Email ID" />
            <div className="loginpass"><input type={isShowPassword ? "text" : "password"} id="password" name="password" value={Data.password} onChange={handleChange} placeholder="Password" /><span onClick={() => setIsShowPassword(!isShowPassword)}>{isShowPassword ? <IoMdEyeOff/> : <IoMdEye/>}</span></div>
            <div className="d-flex align-items-center gap-3 py-4" style={{ fontSize: "12px" }}>
              <input type="checkbox" />
              <p className="mb-0">By continuing, I agree to the website’s <Link style={{ color: "#FF8272" }}>Terms of Use </Link>and <Link style={{ color: "#FF8272" }}>Privacy policy.</Link></p>
            </div>

            <button className="continuebtn" type='submit'>CONTINUE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
