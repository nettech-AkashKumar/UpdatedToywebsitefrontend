import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../Redux/AuthSlice.jsx";
import login_img from "../../../assets/image/website-logo.png";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { toast, ToastContainer } from "react-toastify";
import BASE_URL from "../../../Config/config.js";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/api/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      if (response.ok) {
        toast.success(`Welcome ${result.name}! Login Successfully`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        //save token in localstorage
        localStorage.setItem("token", result.token);
        //save user id in localstorage
        localStorage.setItem("userId", result.id);
        localStorage.setItem("loggedInUser", JSON.stringify(result));
        dispatch(login(result));
        navigate("/");
      } 
      
      else {
        toast.error(`Invalid email or password`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <div>
      <div
        className="login-conatiner d-flex justify-content-center align-items-center"
        style={{ width: "100%", height: "100vh" }}
      >
        <div
          className="login"
          style={{
            fontFamily: '"Poppins", sans-serif',
            padding: "28px 30px",
          }}
        >
          <div className="login-headline text-center py-4">
            <div className="d-flex justify-content-center">
              {" "}
              <img
                className="img-fluid "
                style={{ width: "60px" }}
                src={login_img}
                alt="login_img"
              />
            </div>
            <h3 className="d-flex gap-2 justify-content-center align-items-center  fs-4">
              <span>Log in</span>
              <span style={{ color: "#5B5B5B", fontSize: "18px" }}>or</span>
              <span>
                <Link to="/registration" style={{ color: "#FF8272" }}>
                  Sign up
                </Link>
              </span>
            </h3>
            <p style={{ fontSize: "13px", color: "#787878" }}>
              Your shopping journey starts here—log in or create an account.
            </p>
          </div>
          <form action="" onSubmit={handleLogin} className="login-form">
            <input
              className="email-login"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email ID"
            />
            <div className="loginpass">
              <input
                type={isShowPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <span onClick={() => setIsShowPassword(!isShowPassword)}>
                {isShowPassword ? <IoMdEyeOff /> : <IoMdEye />}
              </span>
            </div>
            <button type="submit" className="continuebtn">
              CONTINUE
            </button>
          </form>
          <span className="forgotpassbtn w-100 text-end my-2">
            <Link to="/forgotpassword" style={{ color: "#FF8272" }}>
              Forgot Passwords?
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
