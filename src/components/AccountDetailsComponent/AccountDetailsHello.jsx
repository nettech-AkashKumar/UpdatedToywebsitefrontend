import React, { useState } from "react";
import "./AccountDetailsHello.css";
import { FaUserAlt } from "react-icons/fa";
import { RiArrowDropRightLine, RiArrowDropDownLine } from "react-icons/ri";

const AccountDetailsHello = () => {
  const [isOpen, setIsOpen] = useState(false);

const dropdowns = [
  { label: "Gift Cards", options: ["Gift Cards1", "Gift Cards2", "Gift Cards3"] },
  { label: "Saved UPI", options: ["Saved UPI1", "Saved UPI2", "Saved UPI3"] },
  { label: "Saved Cards", options: ["Saved Cards1", "Saved Cards2", "Saved Cards3"] },
];


  return (
    <div className="accndetailhellomain">
      <div className="helloicondiv">
        <div style={{ width:"35px", height:"35px", backgroundColor: "#ff8272", borderRadius:'50%'}}>
            <span style={{width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}><FaUserAlt style={{color:"white", fontSize:'17px',}}/></span>
        </div>
        <span className="hellotext">Hello</span>
      </div>
      <hr style={{height:'1px solid #A2A2A2'}}/>
      {/* my orders section */}
      <div className="myorderspersonaldiv">
        <p
          className=""
          style={{
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "150%",
            letterSpacing: "0",
            textTransform: "capitalize",
            color: "#3D3D3D",
          }}
        >
          My Orders
        </p>
        <p
          style={{
            color: "#FF8272",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "150%",
            letterSpacing: "0",
            padding: "10px 28px 10px 11px",
            backgroundColor: "#FFEEEB",
          }}
        >
          Profile Information
        </p>
        <p
          style={{
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "150%",
            letterSpacing: "0",
            color: "#828282",
          }}
        >
          Manage Addresses
        </p>
      </div>
      <hr style={{height:'1px solid #A2A2A2'}}/>
      {/* my payment section */}
      <div className="myorderspersonaldiv">
        <p
          style={{
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "150%",
            letterSpacing: "0",
            textTransform: "capitalize",
            color: "#3D3D3D",
          }}
        >
          Payments
        </p>
        {dropdowns.map((dropdown, index) => (
          <div key={index} style={{width:'100%'}}>
            <p onClick={() => setIsOpen(isOpen === index ? null : index)}
              style={{display:'flex', justifyContent:'space-between', alignItems:'center', cursor:'pointer', color:'#828282', fontSize:'14px',letterSpacing:'0', lineHeight:'150%', fontWeight:400}}
              >
             <span>{dropdown.label}</span>
             {isOpen === index ? 
             (
              <RiArrowDropDownLine style={{fontSize:'27px', fontWeight:'300'}}/>
             ) :
              (<RiArrowDropRightLine style={{fontSize:'27px'}}/>

             )}
            </p>
          {isOpen === index && (
            <ul style={{marginTop:'5px', paddingLeft:'15px', fontSize:'14px',color:'#828282', fontWeight:400}}>
              {dropdown.options.map((option, i) => (
                <li key={i} style={{padding:'4px 0'}}>{option}</li>
              ))}
            </ul>
          )}
          </div>
        ))}
      </div>
      <hr style={{height:'1px solid #A2A2A2'}}/>

      {/* my stuff */}
      <div className="myorderspersonaldiv">
        <p
          style={{
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "150%",
            letterSpacing: "0",
            textTransform: "capitalize",
            color: "#3D3D3D",
          }}
        >
          MY STUFF
        </p>
        <p
          style={{
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "150%",
            letterSpacing: "0",
            color: "#828282",
          }}
        >
          My Coupons
        </p>
         <p
          style={{
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "150%",
            letterSpacing: "0",
            color: "#828282",
          }}
        >
          My Ratings & Reviews
        </p>
           <p
          style={{
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "150%",
            letterSpacing: "0",
            color: "#828282",
          }}
        >
          My Wishlist
        </p>
      </div>
      <hr style={{height:'1px solid #A2A2A2'}}/>
      {/* setting and help */}
      <div className="myorderspersonaldiv">
        
        <p
          style={{
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "150%",
            letterSpacing: "0",
            color: "#828282",
          }}
        >
          Settings
        </p>
         <p
          style={{
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "150%",
            letterSpacing: "0",
            color: "#828282",
          }}
        >
          Help
        </p>
      </div>
      <hr style={{height:'1px solid #A2A2A2'}}/>
      {/* logout and delete account */}
       <div className="myorderspersonaldiv">
        
        <p
          style={{
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "150%",
            letterSpacing: "0",
            color: "#FF8272",
          }}
        >
          Logout
        </p>
         <p
          style={{
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "150%",
            letterSpacing: "0",
            color: "#3D3D3D",
          }}
        >
          Delete Account
        </p>
      </div>
      <hr style={{height:'1px solid #A2A2A2'}}/>
    </div>
  );
};

export default AccountDetailsHello;
