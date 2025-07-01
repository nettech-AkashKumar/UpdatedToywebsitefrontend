import React from 'react';
import "./Sidebar_userprofile.css"
import { NavLink,useNavigate} from 'react-router';
import { useDispatch,useSelector } from "react-redux";
import { logout } from "../../Redux/AuthSlice";



const Userprofile_Layouts = () => {
  
   const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const handleLogin = () => {
    navigate('/login');
  };
  return (
    <div>
       
         <div className="sidebar-userprofile" style={{fontFamily:'Poppins, sans-serif'}}>
          <ul className='sidebar-ul'>
            <li><NavLink to="/accountdetails" className={({ isActive }) => isActive ? 'active' : ''}>Account details</NavLink></li>
            <li><NavLink to="/orderhistory" className={({ isActive }) => isActive ? 'active' : ''}>Orders History</NavLink></li>
            <li><NavLink to="/wishlist" className={({ isActive }) => isActive ? 'active' : ''}>Wishlist</NavLink></li>
            <li><NavLink to="/address_book" className={({ isActive }) => isActive ? 'active' : ''}>Address book</NavLink></li>
            <li><NavLink to="/recent_activity" className={({ isActive }) => isActive ? 'active' : ''}>Recent Activity</NavLink></li>
            <li><NavLink to="/support_help" className={({ isActive }) => isActive ? 'active' : ''}>Support & Help</NavLink></li>
            <li><NavLink to="/order_tracking" className={({ isActive }) => isActive ? 'active' : ''}>Order Tracking</NavLink></li>
            <li><NavLink to="/rating-reviews" className={({ isActive }) => isActive ? 'active' : ''}>Reviews & Ratings</NavLink></li>
            <li className={({ isActive }) => isActive ? 'active' : ''}> {isAuthenticated ? (
              <NavLink to="/" onClick={handleLogout}>
                Logout
              </NavLink>
            ) : (
              <NavLink to="#" onClick={handleLogin}>
                Login
              </NavLink>
            )}</li>
          </ul>
         </div>
    </div>
  );
}

export default Userprofile_Layouts;
