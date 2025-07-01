import React, { useState } from "react";
import "./SubmitUserCommit.css"
import RatingStar from "../../components/RatingStar/RatingStar.jsx";
import { BsCloudUpload } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
// import { IoMdStarOutline } from "react-icons/io";
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const SubmitUserCommit = ({ isOpen, onClose }) => {

  const initialFormState = {
    name: "",
    prosCons: "",
    review: "",
    rate: 0,
    image: null,
    profileImage: null,
    isOpenToContact: false,
    agreesToTerms: false,
    progress: 0,
  }
  const [formData, setFormData] = useState(initialFormState);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  // handle rating changes
  const handleRatingChange = (rating) => {
    setFormData((prev) => ({
      ...prev,
      rate: rating
    }))
  }

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: checked,
    }))
  }

  // handle rangeslider
  const handleRangeChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      progress: e.target.value,
    }))
  }

  // file uploads
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const imagesArray = [];
      files.forEach((file, index) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          imagesArray.push(reader.result)
          // when all files are read update the state
          if (imagesArray.length === files.length) {
            setFormData((prev) => ({
              ...prev,
              image: imagesArray,
            }));
          }
        }
        reader.readAsDataURL(file)
      })
    };
  }

  // file uploads
  const handleProfileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          profileImage: reader.result
        }));
      };
      reader.readAsDataURL(file)
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // save data to localstorage
    function saveFormData(formData) {
      const existingData = JSON.parse(localStorage.getItem("formDataArray")) || [];
      existingData.push(formData)

      // save data to localstorage
      localStorage.setItem("formDataArray", JSON.stringify(existingData))
      console.log("Updated data in localStorage", existingData)
    }
    saveFormData(formData)
    toast.success("Data saved locally", {
      position: 'top-center',
      autoClose: 3000
    })
    onClose();

    // reset form to initial state
    setFormData(initialFormState)
  }


  if (!isOpen) return null;
  return (
    <div>
      {/* user comment form */}
      <div className="submitmodal-overlay">
        <div className="submitmodal-content">
          <div className="reviewdiv">
            <div className="form-container">
              <form action="" onSubmit={handleSubmit}>
                <button className="submitclose-btn" onClick={onClose}>&times;</button>
                <h3 style={{ fontSize: '20px', fontWeight: '500', textAlign: 'center' }}>Leave a review for buyed product</h3>
                <div className="form-group">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                {/* upload profile Image start*/}
                <div className="" style={{ padding: "5px 0px" }}>
                  <label htmlFor="upload" className="upload">
                    Upload your Profile
                  </label>
                  <p
                    className="d-lg-none d-md-none"
                    style={{
                      width: "100%",
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      color: "#6D6D6D",
                    }}
                  >
                    Add your Profile Image {" "}
                  </p>
                </div>
                <div
                  className="form-group"
                  style={{
                    marginBottom: '10px',
                    border: "2px dashed #ccc",
                    padding: "20px",
                    textAlign: "center",
                    borderRadius: "10px",
                    margin: "0 auto",
                    width: "100%",
                  }}
                >
                  {/* upload picture */}
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{ gap: "4px" }}
                  >
                    <BsCloudUpload style={{ color: "#191D23", fontSize: "24px" }} />
                    <input
                      type="file"
                      id="profile"
                      name="profile"
                      accept="image/*"
                      onChange={handleProfileUpload}
                      style={{ display: "none" }}
                    />
                    <span
                      className="browseplaceholder"
                      style={{
                        color: "#191D23",
                        fontWeight: 300,
                        fontSize: "14px",
                        lineHeight: "19px",
                      }}
                    >
                      {formData.profileImage && (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <img
                            src={formData.profileImage}
                            alt="Updated Preview"
                            style={{
                              width: "100px",
                              height: "100px",
                              marginTop: "10px",
                            }}
                          />
                        </div>
                      )}
                      Browse and choose your Image
                    </span>
                    <span
                      style={{
                        backgroundColor: "#ff8272",
                        padding: "2px 6px",
                        borderRadius: "4px",
                        color: "'FFFFF",
                        cursor: "pointer",
                      }}
                      onClick={() => document.getElementById("profile").click()}
                    >
                      <AiOutlinePlus />
                    </span>
                  </div>
                </div>

                {/* upload profile Image end */}

                <div className="form-group">
                  <label htmlFor="">Pros and Cons</label>
                  <input
                    type="text"
                    id="prosCons"
                    name="prosCons"
                    required
                    placeholder="List the pros and cons"
                    value={formData.prosCons}
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label htmlFor="review">Review</label>
                  <textarea
                    id="review"
                    name="review"
                    required
                    placeholder="Enter a description..."
                    value={formData.review}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <RatingStar
                  rate={formData.rate}
                  onRateChange={handleRatingChange}
                />
                <div className="">
                  <span className="excellent">Excellent</span>
                </div>
                {/* progress bar */}
                <div className="form-group" style={{ padding: "10px 0px" }}>
                  <label htmlFor="progress" className="goodprogresslabel">
                    How good we are?
                  </label>
                  <div className="progress-wrapper">
                    <div className="progress-indicator">None</div>
                    <input
                      type="range"
                      id="range"
                      value={formData.progress}
                      min="0"
                      max="100"
                      onChange={handleRangeChange}
                      className="progress-slider p-0"
                      style={{ "--progress": `${formData.progress}%` }}
                    />
                    <div
                      className="progress-indicator"
                      style={{ left: `calc(${formData.progress}% - 10px)` }}
                    >
                      {formData.progress}%
                    </div>
                  </div>
                </div>
                {/* upload picture */}
                <div className="" style={{ padding: "5px 0px" }}>
                  <label htmlFor="upload" className="upload">
                    Upload products
                  </label>
                  <p
                    className="d-lg-none d-md-none"
                    style={{
                      width: "100%",
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      color: "#6D6D6D",
                    }}
                  >
                    Add your document here, and you can upload up to 5 files max{" "}
                  </p>
                </div>
                <div
                  className="form-group"
                  style={{
                    border: "2px dashed #ccc",
                    padding: "20px",
                    textAlign: "center",
                    borderRadius: "10px",
                    margin: "0 auto",
                    width: "100%",
                  }}
                >
                  {/* upload picture */}
                  <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{ gap: "4px" }}
                  >
                    <BsCloudUpload style={{ color: "#191D23", fontSize: "24px" }} />
                    <input
                      type="file"
                      id="upload"
                      name="upload"
                      accept="image/*"
                      onChange={handleFileUpload}
                      style={{ display: "none" }}
                      multiple
                    />
                    <span
                      className="browseplaceholder"
                      style={{
                        color: "#191D23",
                        fontWeight: 300,
                        fontSize: "14px",
                        lineHeight: "19px",
                      }}
                    >
                      {formData.image && formData.image.length > 0 && (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <img
                            src={formData.image[0]}
                            alt="Updated Preview"
                            style={{
                              width: "100px",
                              height: "100px",
                              marginTop: "10px",
                            }}
                          />
                        </div>
                      )}
                      Browse and choose the files you want to upload from your
                      computer
                    </span>
                    <span
                      style={{
                        backgroundColor: "#ff8272",
                        padding: "2px 6px",
                        borderRadius: "4px",
                        color: "'FFFFF",
                        cursor: "pointer",
                      }}
                      onClick={() => document.getElementById("upload").click()}
                    >
                      <AiOutlinePlus />
                    </span>
                  </div>
                </div>


                <div
                  className="checkbox-container d-flex align-items-center gap-4"
                  style={{ padding: "10px" }}
                >
                  <input
                    type="checkbox"
                    id="isOpenToContact"
                    checked={formData.isOpenToContact}
                    onChange={handleCheckboxChange}
                  />
                  <label className="tickme" htmlFor="isOpenToContact">
                    I am open to being contacted for follow-up questions
                  </label>
                </div>
                <div
                  className="checkbox-container d-flex align-items-center gap-4"
                  style={{ padding: "10px" }}
                >
                  <input
                    type="checkbox"
                    id="agreesToTerms"
                    checked={formData.agreesToTerms}
                    onChange={handleCheckboxChange}
                  />
                  <label className="tickme" htmlFor="agreesToTerms">
                    I agree to the terms and conditions to the use of my review in
                    marketting materials
                  </label>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "20px 0px",
                  }}
                >
                  <button
                    className="submitbtn"
                    type="submit"
                    style={{
                      width: "100%",
                      padding: "10px 0px",
                      border: "none",
                      borderRadius: "10px",
                      backgroundColor: "#ff8272",
                      color: "#F5F5F5",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "20px",
                      fontFamily: "Inter, serif",
                      cursor: "pointer",
                      transition: "background 0.3s",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.backgroundColor = "#ff8272")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.backgroundColor = "#ff8272")
                    }
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitUserCommit;
