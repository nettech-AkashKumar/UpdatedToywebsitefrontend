// ReplyModal.jsx
import { useState } from "react";

// Basic inline styles
const overlayStyle = {
  position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
  background: "rgba(0,0,0,0.6)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000,
};
const modalStyle = {
  background: "#fff", padding: 20, borderRadius: 10, width: "90%", maxWidth: 500,
};

const ReplySupportModal = ({ user, onClose, onSendReply }) => {
  const [reply, setReply] = useState("");

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h3>Reply to {user.fullName}</h3>
        <p>Message:-{user.message}</p>
        <textarea
          rows="4"
          placeholder="Type your reply..."
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          style={{ width: "100%" }}
        />
        <div style={{ marginTop: "10px", display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          <button onClick={onClose}>Cancel</button>
          <button onClick={() => {
            onSendReply(user._id, reply);
            onClose();
          }}  style={{backgroundColor:"#ff7a5a", color:"white", padding:"5px 10px", display:"flex", alignItems:"center", gap:"5px" }}>Send</button>
        </div>
      </div>
    </div>
  );
};



export default ReplySupportModal;
