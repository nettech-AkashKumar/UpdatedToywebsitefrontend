import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoutModal from "../../HomeComponents/Logout/LogoutModal.jsx";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../Redux/AuthSlice.jsx";
import styled from "styled-components";
import { IoIosLogOut } from "react-icons/io";
import { TbListDetails } from "react-icons/tb";
import { AiOutlineLogin } from "react-icons/ai";
import { GrUnorderedList, GrMapLocation } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";
import { BsActivity } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { MdOutlineSpatialTracking } from "react-icons/md";
import { TbRating21Plus } from "react-icons/tb";

const ListItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid #a2a2a2;

  a {
    color: black;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: color 0.3s ease;
  }

  &:hover a {
    color: #ffad96ed; /* Change to your desired hover color */
  }
`;

const Modal = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("isAuthenticated:", isAuthenticated);

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    if (isAuthenticated) {
      navigate(path);
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <div
        className=""
        style={{
          width: "230px",
          padding: "20px",
          borderRadius: "5px",
          backgroundColor: "white",
          boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
        }}
      >
        <span>
          <strong>Welcome,</strong> {user ? user.name : "Shopinity"}{" "}
        </span>

        <ul className="my-2 p-0">
          <ListItem>
            <Link
              onClick={() => handleRedirect("/accountdetails")}
              style={{ fontFamily: '"Poppins", sans-serif', fontWeight: "400" }}
            >
              <TbListDetails /> Account Details
            </Link>
          </ListItem>
          <ListItem>
            <Link
              onClick={() =>
                isAuthenticated ? setIsModalOpen(true) : navigate("/login")
              }
              style={{ fontFamily: '"Poppins", sans-serif', fontWeight: "400" }}
            >
              <AiOutlineLogin />{" "}
              {isAuthenticated ? <span>Logout</span> : <span>Login</span>}
            </Link>
          </ListItem>
          <LogoutModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
          <ListItem>
            <Link
              onClick={() => handleRedirect("/orderhistory")}
              style={{ fontFamily: '"Poppins", sans-serif', fontWeight: "400" }}
            >
              <GrUnorderedList /> Order History
            </Link>
          </ListItem>
          <ListItem>
            <Link
              onClick={() => handleRedirect("/wishlist")}
              style={{ fontFamily: '"Poppins", sans-serif', fontWeight: "400" }}
            >
              <FaRegHeart /> Wishlist
            </Link>
          </ListItem>
          <ListItem>
            <Link
              onClick={() => handleRedirect("/address_book")}
              style={{ fontFamily: '"Poppins", sans-serif', fontWeight: "400" }}
            >
              <GrMapLocation /> Address Book
            </Link>
          </ListItem>
          <ListItem>
            <Link
              onClick={() => handleRedirect("/recent_activity")}
              style={{ fontFamily: '"Poppins", sans-serif', fontWeight: "400" }}
            >
              <BsActivity /> Recent Activity
            </Link>
          </ListItem>
          <ListItem>
            <Link
              onClick={() => handleRedirect("/support_help")}
              style={{ fontFamily: '"Poppins", sans-serif', fontWeight: "400" }}
            >
              <BiSupport /> Support & Help
            </Link>
          </ListItem>
          <ListItem>
            <Link
              onClick={() => handleRedirect("/order_tracking")}
              style={{ fontFamily: '"Poppins", sans-serif', fontWeight: "400" }}
            >
              <MdOutlineSpatialTracking /> Order Tracking
            </Link>
          </ListItem>
          <ListItem>
            <Link
              onClick={() => handleRedirect("/rating-reviews")}
              style={{ fontFamily: '"Poppins", sans-serif', fontWeight: "400" }}
            >
              <TbRating21Plus /> Reviews & Ratings
            </Link>
          </ListItem>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
