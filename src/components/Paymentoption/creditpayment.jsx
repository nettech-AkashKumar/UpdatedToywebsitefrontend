import React from "react";

const CreditCardPayment = ({}) => {
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
    <h4>CREDIT/ DEBIT CARD</h4>
    <div style={styles.offerText}>7.5% Discount - Myntra Kotak Credit Card</div>
    <input type="text" placeholder="Card Number" style={styles.input} />
    <input type="text" placeholder="Name on card" style={styles.input} />
    <div style={styles.cardRow}>
      <input type="text" placeholder="Valid Thru (MM/YY)" style={{ ...styles.input, width: "50%" }} />
      <input type="text" placeholder="CVV" style={{ ...styles.input, width: "50%" }} />
    </div>
    {/* <button style={styles.payNowButton}>PAY NOW</button> */}
  </div>
);
}

export default CreditCardPayment;
