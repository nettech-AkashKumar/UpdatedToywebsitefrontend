import React, { useState } from "react";
import "./myaccordian.css";
import { IoIosArrowUp } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io'

const Myaccordian = ({ question, answer }) => {
  const [show ,setShow] = useState(false);
  return (
    <>
      <div className="faq-ques">
      <div className="faq-box">
        <h3>{question}</h3>
       
         <p onClick = {() => setShow(!show) }>
          {show? (
            <IoIosArrowUp style={{color:'#FF8272', fontSize:'17px', fontWeight:300}}/>
          ) : (
            <IoIosArrowDown style={{color:'#FF8272', fontSize:'17px', fontWeight:300}}/>
          ) }
           </p>
          </div>
      
      { show &&  <p className= "answers">{answer} </p> }
      </div>
    </>
  );
};

export default Myaccordian;
