// // components/NotificationToaster.jsx
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer, Slide } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// import BASE_URL from '../../Config/config.js';

// const NotificationToaster = ({ trigger }) => {
//   const [messages, setMessages] = useState([]);
//   useEffect(() => {
//     if (trigger) {
//       // Dismiss all existing toasts to avoid duplicates
//       toast.dismiss();

//       axios.get(`${BASE_URL}/api/admin/support-notifications`)
//         .then((res) => {
//           const data = res.data || [];

//           if (data.length === 0) {
//             toast.info("No support messages.", {
//               toastId: "no-msg",
//               autoClose: 4000,
//               closeOnClick: true,
//               transition: Slide,
//               style: { whiteSpace: 'pre-line' }
//             });
//           } else {
//             data.forEach((item, index) => {
//               toast.info(
//                 `Name: ${item.fullName}\nEmail: ${item.email}\nSubject: ${item.subject}\nMessage: ${item.message}`,
//                 {
//                   toastId: `support-${index}`, // prevent duplicates
//                   autoClose: 5000,
//                   position: "top-right",
//                   closeOnClick: true,
//                   hideProgressBar: false,
//                   pauseOnHover: true,
//                   draggable: true,
//                   transition: Slide,
//                   style: { whiteSpace: "pre-line" },
//                 }
//               );
//             });
            
//           }
//         })
//         .catch((err) => {
//           console.error("Notification fetch error", err);
//           toast.error("Failed to load notifications.", {
//             toastId: "error-fetch",
//             autoClose: 4000,
//             transition: Slide,
//           });
//         });
//     }
//   }, [trigger]);

// //   const handleReply = async (userId, replyMessage) => {
// //   try {
// //     const res = await axios.post(`${BASE_URL}/api/admin/reply-support`, {
// //       userId,
// //       replyMessage,
// //     });

// //     toast.success("Reply sent and message deleted.");
// //   } catch (err) {
// //     toast.error("Failed to send reply.");
// //     console.error(err);
// //   }
// // };
//   const handleReply = async (userId, replyMessage) => {
//   console.log("🔍 Debug: handleReply called with", { userId, replyMessage });
//   try {
//     const res = await axios.post(`${BASE_URL}/api/admin/reply-support`, {
//       userId,
//       replyMessage,
//     });
//     console.log("✔ Server replied:", res.data);
//     toast.success("Reply sent and message deleted.");
//     setMessages(prev => prev.filter(m => m._id !== userId));
//   } catch (err) {
//     console.error("❌ Error in handleReply:", err.response?.status, err.response?.data, err.message);
//     toast.error("Failed to send reply.");
//   }
// };
//   return (
//     <>
//     <ToastContainer
//       closeOnClick
//       pauseOnHover
//       draggable
//       closeButton
//       newestOnTop
//       limit={4}
//       autoClose={5000}
//       transition={Slide}
//     />
    
//     </>
    
//   );
// };

// export default NotificationToaster;




import { useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer, Slide } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from '../../Config/config.js';
import CustomSupportToast from "./CustomSupportToast";

const NotificationToaster = ({ trigger,  onReplyHandled }) => {
  useEffect(() => {
    if (trigger) {
      toast.dismiss();

      axios.get(`${BASE_URL}/api/admin/support-notifications`)
        .then((res) => {
          const data = res.data || [];

          if (data.length === 0) {
            toast.info("No support messages.", { toastId: "no-msg", autoClose: 4000 });
          } else {
            data.forEach((item, index) => {
              toast.info(<CustomSupportToast item={item} onReply={handleReply} />, {
                toastId: `support-${index}`,
                autoClose: false, // Stay open until closed
                position: "top-right",
                closeOnClick: false,
                draggable: false,
              });
            });
          }
        })
        .catch((err) => {
          toast.error("Failed to load notifications.");
          console.error("Fetch Error:", err);
        });
    }
  }, [trigger]);

const handleReply = async (userId, replyMessage) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/admin/reply-support`, {
      userId,
      replyMessage,
    });
    toast.success("Reply sent successfully.");

    // 👇 Notify parent that one message was replied to
    if (onReplyHandled) {
      onReplyHandled(userId); // You can also pass userId if needed
    }

  } catch (err) {
    toast.error("Failed to send reply.");
    console.error(err);
  }
};


  return <ToastContainer  limit={4} transition={Slide} />;
};

export default NotificationToaster;
