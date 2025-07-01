import React from 'react';
import "./Herosection_Userprofile.css"

const Heroscetion_Userprofile = ({heading,subheading}) => {
  return (
    <div>
      <div className="hero-section-userprofile text-center" style={{fontFamily: 'Poppins, sans-serif'}}>
        <p><strong style={{color:"#FF8272"}}>{heading}/</strong><span style={{color:"#FF8272"}}>{subheading}</span></p>
      </div>
    </div>
  );
}

export default Heroscetion_Userprofile;
