import React, { useState } from "react";
import QRCode from "react-qr-code";

const UPIPayment = ({ selectedOption, setSelectedOption }) => {
  const [upiMethod, setUpiMethod] = useState();

   const upiPaymentLink = `upi://pay?pa=merchant-vpa@upi&pn=Your+Store+Name&mc=0000&tid=TXN123456&tr=1234567890&tn=Order123&am=499.00&cu=INR`;

      const styles = {
    section: { marginBottom: "30px" },
    radio: { marginRight: "10px" },
    payNowButton: {
      backgroundColor: "#ff3e6c",
      color: "white",
      border: "none",
      padding: "12px",
      width: "100%",
      fontWeight: "bold",
      cursor: "pointer",
      borderRadius: "5px",
    }
  };


    return (
  <div style={styles.section}>
    <h4>Pay using UPI</h4>
    <label>
      <input
        type="radio"
        name="upi"
        value="upi_scan"
        checked={upiMethod === "upi_scan"}
        onChange={() => setUpiMethod("upi_scan")}
        style={styles.radio}
        
      />
      Scan & Pay
    </label>
    {/* conditionally render QRCode only when "upi_scan is selected" */}
    {upiMethod === "upi_scan" && (
      <div style={{margin:"20px 0"}}>
      <QRCode value={upiPaymentLink} size={200} />
      <p style={{color:"#828282", marginTop:'10px'}}>
        Scan this QR code using any UPI app (PhonePe, GPay, Paytm)
      </p>
      </div>
    )}
    <br />
    <label>
      <input
        type="radio"
        name="upi"
        checked={upiMethod === "upi_id"}
        onChange={() => setUpiMethod("upi_id")}
        style={styles.radio}
      />
      Enter UPI ID
    </label>
    {upiMethod === "upi_id" && (
      <div style={{margin:'20px 0', display:'flex', flexDirection:'column', width:'300px',}}>
        <label htmlFor="">Enter UPI ID</label>
        <input type="number" maxLength={12} placeholder="Enter UPI ID here" style={{outline:'none', border:'1px solid gray', borderRadius:'5px', padding:'7px 10px'}}/>
      </div>
    )}
  </div>
    )
};

export default UPIPayment;
