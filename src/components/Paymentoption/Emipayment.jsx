import React from "react";

const EMIPayment = ({ selectedOption, setSelectedOption }) => {
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
    <h4>Select EMI Option</h4>
    <label>
      <input
        type="radio"
        name="emi"
        checked={selectedOption === "emi_bob"}
        onChange={() => setSelectedOption("emi_bob")}
        style={styles.radio}
      />
      Bank of Baroda Credit Card EMI <span style={styles.offerText}>1 Offer</span>
      <div>Available on min. order of ₹2500</div>
    </label>
    <br />
    <label>
      <input
        type="radio"
        name="emi"
        checked={selectedOption === "emi_hdfc_credit"}
        onChange={() => setSelectedOption("emi_hdfc_credit")}
        style={styles.radio}
      />
      HDFC Credit Card EMI <span style={styles.offerText}>1 Offer</span>
      <div>Available on min. order of ₹3000</div>
    </label>
    <br />
    <label>
      <input
        type="radio"
        name="emi"
        checked={selectedOption === "emi_hdfc_debit"}
        onChange={() => setSelectedOption("emi_hdfc_debit")}
        style={styles.radio}
      />
      HDFC Debit Card EMI <span style={styles.offerText}>1 Offer</span>
      <div>Available on min. order of ₹5000</div>
    </label>
  </div>
);
}

export default EMIPayment;
