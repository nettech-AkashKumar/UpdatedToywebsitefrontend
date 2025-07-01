import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaEye } from "react-icons/fa";
import "../account_details/Account_DetailsComp.css";
import { LuUser } from "react-icons/lu";
import { AiOutlineMail } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import "react-phone-input-2/lib/bootstrap.css";
import BASE_URL from "../../../Config/config.js";
import axios from "axios";
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Account_DetailsComp = () => {
  const initialAccountDetails = {
    name: "",
    email: "",
    password: "",
    currentpassword: "",
    newpassword: "",
    confirmpassword: "",
  };

  const [formData, setFormData] = useState(initialAccountDetails);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const response = await axios.get(
          `${BASE_URL}/api/users/singleuser/${userId}`
        );
        console.log("Fetched user data:", response.data);
        setFormData({
          ...formData,
          name: response.data.name || "",
          email: response.data.email || "",
          password: response.data.password || "", //leave blank space for security
        });
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };
    fetchUserData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");
    console.log("userId from account details", userId);

    //validation check for password confirmation
    if (formData.newpassword !== formData.confirmpassword) {
      toast.error("New password and confirm password do not match", {
        position: "top-center",
        autoClose: 5000,
        pauseOnHover: true,
        hideProgressBar: false,
      });
      return;
    }
    try {
      const response = await axios.put(
        `${BASE_URL}/api/users/profile/${userId}`,
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          currentpassword: formData.currentpassword,
          newpassword: formData.newpassword,
          confirmpassword: formData.confirmpassword,
        }
      );
      toast.success("Account updated successfully", {
        position: "top-center",
        autoClose: 5000,
        draggable: true,
        closeOnClick: true,
        hideProgressBar: false,
        pauseOnHover: true,
      });
      //optional clear the password field after successful updates
      setFormData((prev) => ({
        ...prev,
        currentpassword: "",
        newpassword: "",
        confirmpassword: "",
      }));
    } catch (error) {
      console.error("Error updating account", error);
      toast.error(
        error.response?.data?.message || "Failed Error while updating account",
        {
          position: "top-center",
          autoClose: 5000,
          draggable: true,
          closeOnClick: true,
          hideProgressBar: false,
          pauseOnHover: true,
        }
      );
    }
  };

  //for eye toggle
  const [showPasswords, setShowPasswords] = useState({
    password: false,
    current: false,
    new: false,
    confirm: false,
  });

  

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="d-flex pb-5 gap-10">
          {/* <div className="general-container w-100">
         <p>General</p>
         <label style={{color:"#5B5B5B"}} htmlFor="">Name</label>
        <div className="d-flex align-items-center gap-1 my-3" style={{border:"1px solid #DBDBDB", padding:"10px 10px"}}><LuUser /> <input style={{outline:"none"}} type="text" placeholder="Enter name"/></div>
        <label style={{color:"#5B5B5B"}} htmlFor="">Email</label>
        <div className="d-flex align-items-center gap-1 my-3" style={{border:"1px solid #DBDBDB", padding:"10px 10px"}}><AiOutlineMail /> <input style={{outline:"none"}} type="email" placeholder="Enter email" /></div>
          <label style={{color:"#5B5B5B"}} htmlFor="">Your Password</label>
         <div className="d-flex align-items-center gap-1 my-3" style={{border:"1px solid #DBDBDB",padding:"10px 10px" }}><IoEyeOutline /> <input style={{outline:"none"}} type="password"/></div>
      </div> */}
          <div className="general-container w-100">
            <p>General</p>

            <label style={{ color: "#5B5B5B" }} htmlFor="name">
              Name
            </label>
            <div
              className="d-flex align-items-center gap-1 my-3"
              style={{ border: "1px solid #DBDBDB", padding: "10px 10px" }}
            >
              <LuUser />
              <input
                style={{ outline: "none",width:"100%"  }}
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <label style={{ color: "#5B5B5B" }} htmlFor="email">
              Email
            </label>
            <div
              className="d-flex align-items-center gap-1 my-3"
              style={{ border: "1px solid #DBDBDB", padding: "10px 10px" }}
            >
              <AiOutlineMail />
              <input
                style={{ outline: "none",width:"100%" }}
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <label style={{ color: "#5B5B5B" }} htmlFor="password">
              Your Password
            </label>
            <div
              className="d-flex align-items-center gap-1 my-3"
              style={{ border: "1px solid #DBDBDB", padding: "10px 10px" }}
            >
              <IoEyeOutline />
              <input
                style={{ outline: "none",width:"100%"  }}
                type="password"
                 name="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="change-password-container w-100">
            <p>Change Passowrd</p>
            <label style={{ color: "#5B5B5B" }} htmlFor="">
              Current
            </label>
            <div
              className="d-flex align-items-center gap-1 my-3"
              style={{ border: "1px solid #DBDBDB", padding: "10px 10px" }}
            >
              <IoEyeOutline
                onClick={() => {
                  setShowPasswords((prev) => ({
                    ...prev,
                    current: !prev.current,
                  }));
                }}
              />{" "}
              <input
                style={{ outline: "none",width:"100%"  }}
                type={showPasswords.current ? "text" : "password"}
                name="currentpassword"
                id="currentpassword"
                value={formData.currentpassword}
                onChange={handleInputChange}
                required
                placeholder="Current passowrd"
              />
            </div>
            <label style={{ color: "#5B5B5B" }} htmlFor="">
              New
            </label>
            <div
              className="d-flex align-items-center gap-1 my-3"
              style={{ border: "1px solid #DBDBDB", padding: "10px 10px" }}
            >
              <IoEyeOutline
                onClick={() => {
                  setShowPasswords((prev) => ({
                    ...prev,
                    new: !prev.new,
                  }));
                }}
              />{" "}
              <input
                style={{ outline: "none",width:"100%"  }}
                type={showPasswords.new ? "text" : "password"}
                name="newpassword"
                id="newpassword"
                value={formData.newpassword}
                onChange={handleInputChange}
                required
                placeholder="New password"
              />
            </div>
            <label style={{ color: "#5B5B5B" }} htmlFor="">
              Confirm New
            </label>
            <div
              className="d-flex align-items-center gap-1 my-3"
              style={{ border: "1px solid #DBDBDB", padding: "10px 10px" }}
            >
              <IoEyeOutline
                onClick={() => {
                  setShowPasswords((prev) => ({
                    ...prev,
                    confirm: !prev.confirm,
                  }));
                }}
              />{" "}
              <input
                style={{ outline: "none",width:"100%"  }}
                type={showPasswords.confirm ? "text" : "password"}
                name="confirmpassword"
                id="confirmpassword"
                value={formData.confirmpassword}
                onChange={handleInputChange}
                required
                placeholder="Confirm password"
              />
            </div>
          </div>
        </div>
        <button
          style={{
            backgroundColor: "#FF8272",
            color: "white",
            padding: "10px 10px",
            width: "100%",
          }}
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Account_DetailsComp;
