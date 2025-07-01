import React, { useState } from "react";
import "./AccountDetailsPersonalinfo.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FcCalendar } from "react-icons/fc";

const AccountDetailsPersonalinfo = () => {
  const [gender, setGender] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="accndetailpersnlinfomaindiv">
      <div className="persnlinfoheadingdiv">
        <span className="persnlinfheading">Personal Information</span>
      </div>
      <hr style={{ height: "1px solid #A2A2A2" }} />
      {/* form */}
      <div className="accndetailformdiv">
        <form action="">
          <div
            className=""
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              marginTop: "10px",
              gap: "30px",
            }}
          >
            {/* first name */}
            <div
              className="w-full mb-3"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="" className="accondetallabel">
                First name
              </label>
              <div style={{display:'flex'}}>
              <input
                className="accouninput"
                type="text"
                placeholder="Enter First name"
              />
              </div>
            </div>
            {/* last name */}
            <div
              className="w-full mb-3"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label htmlFor="" className="accondetallabel">
                Last name
              </label>
              <div style={{display:'flex'}}>
              <input
                className="accouninput"
                type="text"
                placeholder="Enter Last name"
              />
              </div>
            </div>
          </div>
          {/* for phone */}
          <div
            className="w-full mb-3"
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <label htmlFor="" className="accondetallabel">
              Phone no
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <input
                className="accouninput"
                type="number"
                placeholder="Enter Phone no"
              />
              <button
              type="button"
                className="accouninputbutton"
                style={{ position: "absolute" }}
              >
                Change
              </button>
            </div>
          </div>
          {/* for email */}
          <div
            className="w-full mb-3"
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <label htmlFor="" className="accondetallabel">
              Email ID
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <input
                className="accouninput"
                type="email"
                placeholder="Enter Email ID"
              />
              <button
              type="button"
                className="accouninputbutton"
                style={{ position: "absolute" }}
              >
                Change
              </button>
            </div>
          </div>
          {/* gender */}
          <div
            className="w-full mb-3"
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <label htmlFor="" className="accondetallabel">
              Gender
            </label>
            <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
              <input
                className="radioput"
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="" className="accondetallabel">
                Male
              </label>
              <input
                className="radioput"
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="" className="accondetallabel">
                Female
              </label>
            </div>
          </div>

          {/* Date of birth */}
          <div
            className="w-full mb-3"
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <label htmlFor="" className="accondetallabel">
              Date Of Birth
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                border: "1px solid #DBDBDB",
                borderRadius: "5px",
              }}
            >
              {/* custom date picker */}
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="(dd/mm/yyyy)"
                className="accouninput accouninputdate"
                popperPlacement="bottom-start"
              />
              <button
              type="button"
                className="accouninputbutton"
                style={{ position: "absolute" }}
                onClick={() =>
                  document
                    .querySelector(".react-datepicker__input-container input")
                    .focus()
                }
              >
                <FcCalendar style={{ fontSize: "20px" }} />
              </button>
            </div>
          </div>
          {/* alternative phone number */}
           {/* for alternative phone */}
        <div className="w-full mb-3" style={{display:'flex', flexDirection:'column', position:'relative'}}>
            <label htmlFor="" className='accondetallabel'>Alternative Phone no</label>
            <div style={{display:'flex', alignItems:'center', position:'relative'}}>
            <input className='accouninput' type="number"  placeholder='Enter Phone no'/>
            <button type="button" className='accouninputbutton' style={{position:'absolute'}}>Change</button>
            </div>
        </div>
        <div className="accoundetsavebtndiv">
          <button type="button" className="accoundetsavebtn">Save Details</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default AccountDetailsPersonalinfo;
