import React from "react";

const NetBankingPayment = ({ selectedOption, setSelectedOption }) => {
  const banks = ["Axis Bank", "HDFC Bank", "ICICI Bank", "Kotak", "SBI"];
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
      <h4>Net Banking</h4>
      {banks.map((bank) => (
        <label key={bank}>
          <input
            type="radio"
            name="netbank"
            checked={selectedOption === bank}
            onChange={() => setSelectedOption(bank)}
            style={styles.radio}
          />
          {bank}
          <br />
        </label>
      ))}
      {/* <button style={styles.payNowButton}>PAY NOW</button> */}
    </div>
  );
};

export default NetBankingPayment;
