import React from "react";
import "../Logout/LogoutModal.css";
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector, useDispatch } from "react-redux";
import { logout as reduxLogout } from "../../../Redux/AuthSlice.jsx";
import logout_logo from "../../../assets/image/website-logo.png"; // Adjust the path as necessary

const LogoutModal = ({ isOpen, onClose }) => {
    const { logout } = useAuth0();
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container d-flex flex-column jusctify-content-center align-items-center">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                <img className="img-fluid" style={{width:"50px"}}  src={logout_logo} alt="logout_logo" />
                <h2>Logging Out</h2>
                <p>Hey! you are leaving our site.</p>
                <div className="modal-actions d-flex gap-3">
                    <button className="logout-btn" onClick={() =>{
                        logout({
                            logoutParams: { returnTo: window.location.origin },
                        });
                        dispatch(reduxLogout()); // Using the renamed redux logout function
                    }}>
                        Logout
                    </button>
                    <button className="cancel-btn" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;
