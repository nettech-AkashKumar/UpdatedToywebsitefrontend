import React, { useState } from "react";
import "./Support_Help.css";
import PageLayout from "../../../layouts/PageLayout";
import Herosection_Userprofile from "../herosection_userprofile/Herosection_Userprofile";
import Sidebar_userprofile from "../../sidebar_userprofile/Sidebar_userprofile";
import { LuUser } from "react-icons/lu";
import BASE_URL from "../../../Config/config.js";
//ye code uncomment tab hoga jab paymet getway kam krega
// import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { MdSubject } from "react-icons/md";

const Support_Help = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  //ye code uncomment tab hoga jab paymet getway kam krega
  //  const hasPurchased = useSelector((state) => state.orders?.length > 0); // Adjust path as needed

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //ye code uncomment tab hoga jab paymet getway kam krega
    // if (!hasPurchased) {
    //   toast.error("You need to purchase a product before contacting support.");
    //   return;
    // }

    try {
      const response = await fetch(`${BASE_URL}/api/support`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Form submitted successfully!", {
          toastId: "support-success", // unique id to avoid multiple toasts
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Submission failed. Please try again.", {
          toastId: "support-error",
          autoClose: 3000,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <PageLayout>
        <div>
          <Herosection_Userprofile
            heading="Your Profile "
            subheading=" Support & Help"
          />
          <div
            className="supportandhelp-container"
            style={{ display: "flex", gap: "40px" }}
          >
            <Sidebar_userprofile />
            <div style={{ width: "100%" }}>
              <h1 style={{ fontFamily: '"Poppins", sans-serif' }}>
                Contact Us
              </h1>
              <form action="" onSubmit={handleSubmit}>
                <div style={{ padding: "6px 0" }}>
                  <label
                    htmlFor="name"
                    style={{
                      padding: "6px 0",
                      fontSize: "18px",
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    Full Name
                  </label>
                  <div
                    className="name-helpsupportform"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #d0c8c8",
                      padding: "12px 10px",
                      borderRadius: "5px",
                      gap: "5px",
                    }}
                  >
                    <LuUser />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      style={{
                        outline: "none",
                        border: "none",
                        width: "100%",
                        height: "100%",
                      }}
                      required
                    />
                  </div>
                </div>

                <div style={{ padding: "6px 0" }}>
                  <label
                    htmlFor="name"
                    style={{
                      padding: "6px 0",
                      fontSize: "18px",
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    Email Address
                  </label>
                  <div
                    className="name-helpsupportform"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #d0c8c8",
                      padding: "12px 10px",
                      borderRadius: "5px",
                      gap: "5px",
                    }}
                  >
                    <AiOutlineMail />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email-address"
                      style={{
                        outline: "none",
                        border: "none",
                        width: "100%",
                        height: "100%",
                      }}
                      required
                    />
                  </div>
                </div>

                <div style={{ padding: "6px 0" }}>
                  <label
                    htmlFor="name"
                    style={{
                      padding: "6px 0",
                      fontSize: "18px",
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    Phone Number
                  </label>
                  <div
                    className="name-helpsupportform"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #d0c8c8",
                      padding: "12px 10px",
                      borderRadius: "5px",
                      gap: "5px",
                    }}
                  >
                    <FiPhone />
                    <input
                      type="number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      style={{
                        outline: "none",
                        border: "none",
                        width: "100%",
                        height: "100%",
                      }}
                      required
                    />
                  </div>
                </div>

                <div style={{ padding: "6px 0" }}>
                  <label
                    htmlFor="name"
                    style={{
                      padding: "6px 0",
                      fontSize: "18px",
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    Subject
                  </label>
                  <div
                    className="name-helpsupportform"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #d0c8c8",
                      padding: "12px 10px",
                      borderRadius: "5px",
                      gap: "5px",
                    }}
                  >
                    <MdSubject />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="your query subject"
                      style={{
                        outline: "none",
                        border: "none",
                        width: "100%",
                        height: "100%",
                      }}
                      required
                    />
                  </div>
                </div>

                <div style={{ padding: "6px 0" }}>
                  <label
                    htmlFor="name"
                    style={{
                      padding: "6px 0",
                      fontSize: "18px",
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    Message
                  </label>

                  <textarea
                    className="name-helpsupportform"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    id=""
                    placeholder="Please describe your issue in detail."
                    style={{
                      width: "100%",
                      height: "140px",
                      border: "1px solid rgb(208, 200, 200)",
                      outline: "none",
                      padding: "5px 10px",
                      borderRadius: "5px",
                    }}
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    className="supporthelp-btn"
                    style={{
                      width: "100%",
                      textAlign: "center",
                      backgroundColor: "#FF8272",
                      color: "white",
                      padding: "10px 0",
                      borderRadius: "5px",
                      fontFamily: '"Poppins", sans-serif',
                    }}
                  >
                    SUBMIT
                  </button>
                  <p style={{ color: "#8C8C8C", marginTop:'10px' }}>
                    Thank you! Your query has been submitted. We will get back
                    to you soon.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </PageLayout>
      {/* ye code uncomment tab hoga jab paymet getway kam krega */}
      {/* <ToastContainer /> */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
};

export default Support_Help;
