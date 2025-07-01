// const SupportToastItem = ({ item, onReply }) => {
//   const [reply, setReply] = useState("");

//   return (
//     <div style={{ whiteSpace: "pre-line" }}>
//       <p><strong>Name:</strong> {item.fullName}</p>
//       <p><strong>Email:</strong> {item.email}</p>
//       <p><strong>Subject:</strong> {item.subject}</p>
//       <p><strong>Message:</strong> {item.message}</p>

//       <input
//         type="text"
//         placeholder="Write reply..."
//         value={reply}
//         onChange={(e) => setReply(e.target.value)}
//         style={{
//           width: "100%",
//           padding: "6px",
//           marginTop: "5px",
//           marginBottom: "5px",
//           borderRadius: "4px",
//           border: "1px solid #ccc",
//         }}
//       />
//       <button
//         onClick={() => onReply(item._id, reply)}
//         style={{
//           padding: "5px 10px",
//           backgroundColor: "#4CAF50",
//           color: "#fff",
//           border: "none",
//           borderRadius: "4px",
//           cursor: "pointer",
//         }}
//       >
//         Send Reply
//       </button>
//     </div>
//   );
// };
