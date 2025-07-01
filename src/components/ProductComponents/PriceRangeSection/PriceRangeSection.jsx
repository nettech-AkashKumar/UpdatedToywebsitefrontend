import React, { useState } from "react";
import "./PriceRangeSection.css";
import Slider from 'react-slider'

const PriceRangeSection = () => {
  const MIN = 100;
  const MAX = 12000;

const [values, setValues] = useState([MIN, MAX])

  return (
    <div className="rangepcikerdiv" style={{padding:'30px'}}>
      <div className="rangepickercontentdiv">
        <div className="pricerangefilter">
          <p className="filterheading">Price</p>
          <Slider className={"slider"} onChange={setValues} value={values} min={MIN} max={MAX}/>
        </div>
        <div className="pricefilter">
          <span className="values" style={{border:'1px solid #D9D9D9', padding:'8px', display:'flex', alignItems:'center'}}>₹{values[0]}</span>
          <span style={{border:'1px solid #D9D9D9', padding:'8px', display:'flex', alignItems:'center'}} className="values">₹{values[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeSection;
