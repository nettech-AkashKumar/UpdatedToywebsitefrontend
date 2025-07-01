// CustomSupportToast.jsx
import { useState } from "react";
import ReplySupportModal from "./ReplySupportModal";
import { FaHandPointLeft } from "react-icons/fa";

const CustomSupportToast = ({ item, onReply }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <div>
      <div >
        <p><strong>Name:-{item.fullName}</strong></p>
        <p>Subject:-{item.subject}</p>
        <p>Message:-{item.message}</p>
        <button style={{backgroundColor:"#ff7a5a", color:"white", padding:"5px 10px", display:"flex", alignItems:"center", gap:"5px" }} onClick={() => setShowModal(true)}>Reply <FaHandPointLeft /></button>
      </div>

      {showModal && (
        <ReplySupportModal
          user={item}
          onClose={() => setShowModal(false)}
          onSendReply={onReply}
        />
      )}
      </div>
    </>
  );
};

export default CustomSupportToast;
