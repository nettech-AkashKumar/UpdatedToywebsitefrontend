import React, { useState, useEffect } from "react";
import website_logo from "../../../assets/image/website-logo.png";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import "./Navbar.css";
import Dropdownone from "../dropdown/Dropdownone";
import Dropdowntwo from "../dropdown/Dropdowntwo";
import Dropdownthree from "../dropdown/Dropdownthree";
import Dropdownfour from "../dropdown/Dropdownfour";
import Dropdownfive from "../dropdown/Dropdownfive";
import Modal from "../userprofile/Modal";
import { RxHamburgerMenu } from "react-icons/rx";
import AnimatedSearchbox from "./AnimatedSearchbox";
import { CartState } from "../../../context/Context.jsx";
import { useDispatch, useSelector } from "react-redux";
import { RiDashboardLine } from "react-icons/ri";

const Navbar = ({user}) => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = React.useState(null);
  const [togglemenu, setToggelmenu] = useState(false);
   const [isSticky, setIsSticky] = useState(false);
   const [showChoice, setShowChoice] = useState(false)

  const handleOpenTogglemenu = () => {
    setToggelmenu(prev => !prev);

  }
   
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0); // scroll > 0 par sticky banega
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // handle redirect
  const handleRedirect = (path) => {
    if(isAuthenticated) {
      navigate(path);
    }else {
      navigate("/login")
    }
  }

// for cart
  const {state} = CartState();

  // for wishlist
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("loggedInUser"))
    if (userData?.role?.toLowerCase() === "admin") {
      setShowChoice(true)
    } else {
      setShowChoice(false)
    }
  }, [user]);

  return (
    <div>
      <div className={`header py-3 ${isSticky ? 'sticky-header' : ''}} style={{ boxShadow: "0 4px #f7f7f7" }`}>
        <nav className="d-flex align-items-center  justify-content-between py-2">
          <div className="navbar-logo" onClick={()=> navigate('/')}>
            <img src={website_logo} alt="Logo" />
          </div>
          <div
            className={`navlink align-items-center gap-5 ${togglemenu ? 'show-tablet-nav' : 'hide-tablet-nav'} d-flex`}
            style={{ fontFamily: '"Lato", sans-serif', fontWeight: "600", }}
          >
            <ul className="p-0 d-flex align-items-center position-relative navul">
              <li className="navli">
                {" "}
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? "nav-link-custom active" : "nav-link-custom"
                  }
                >
                  HOME
                </NavLink>
              </li>
              <div
                onMouseEnter={() => setOpenDropdown("men")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <li className="navli">
                  <NavLink
                    to="/men"
                    className={({ isActive }) =>
                      isActive ? "nav-link-custom active" : "nav-link-custom"
                    }
                  >
                    MEN
                  </NavLink>
                </li>
                {openDropdown === "men" && (
                  <div className="position-absolute z-3 top-11 left-3">
                    <Dropdownone />
                  </div>
                )}
              </div>
              <div
                onMouseEnter={() => setOpenDropdown("women")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <li className="navli">
                  <NavLink
                    to="/women"
                    className={({ isActive }) =>
                      isActive ? "nav-link-custom active" : "nav-link-custom"
                    }
                  >
                    WOMEN
                  </NavLink>
                </li>
                {openDropdown === "women" && (
                  <div className="position-absolute z-3 top-11 left-3">
                    <Dropdowntwo />
                  </div>
                )}
              </div>

              <div
                onMouseEnter={() => setOpenDropdown("kids")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <li className="navli">
                  <NavLink
                    to="/kids"
                    className={({ isActive }) =>
                      isActive ? "nav-link-custom active" : "nav-link-custom"
                    }
                  >
                    KIDS
                  </NavLink>
                </li>
                {openDropdown === "kids" && (
                  <div className="position-absolute z-3 top-11 left-3">
                    <Dropdownthree />
                  </div>
                )}
              </div>

              <div
                onMouseEnter={() => setOpenDropdown("beauty")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <li className="navli">
                  <NavLink
                    to="/beauty"
                    className={({ isActive }) =>
                      isActive ? "nav-link-custom active" : "nav-link-custom"
                    }
                  >
                    BEAUTY
                  </NavLink>
                </li>
                {openDropdown === "beauty" && (
                  <div className="position-absolute z-3 top-11 left-3">
                    <Dropdownfour />
                  </div>
                )}
              </div>
              <div
                onMouseEnter={() => setOpenDropdown("electronics")}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <li className="navli">
                  <NavLink
                    to="/electronics"
                    className={({ isActive }) =>
                      isActive ? "nav-link-custom active" : "nav-link-custom"
                    }
                  >
                    ELECTRONICS
                  </NavLink>
                </li>
                {openDropdown === "electronics" && (
                  <div className="position-absolute z-3 top-11 left-3">
                    <Dropdownfive />
                  </div>
                )}
              </div>
            </ul>
            <div
              className="searchnavbar d-flex align-items-center gap-2"
              style={{
                backgroundColor: "white",
                border: "1px solid grey",
                borderRadius: "4px",
                padding: "7px 22px",
                fontSize: "16px",
                fontFamily: '"Lato", sans-serif',
                fontWeight: "600",
              }}
            >
              <CiSearch
                style={{
                  fontSize: "20px",
                  fontFamily: '"Lato", sans-serif',
                  fontWeight: "600",
                }}
              />
              <input type="search" placeholder="Search for Products" />
            </div>
             <div className="animatedsearchbox d-none">
              <AnimatedSearchbox/>
             </div>
          </div>

          <div
            className="navuserwhislistcart d-flex align-items-center text-center gap-5"
            style={{ fontFamily: '"Lato", sans-serif', fontWeight: "600", cursor:'pointer' }}
          >
            {showChoice && (
                <span
                  onClick={() => navigate("/admin/dashboard")}
                  className="d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "var(--nav-textcolor)",
                    padding: "6px",
                    borderRadius: "10px",
                    fontSize: "20px",
                    width: "35px",
                    height: "35px",
                    color: "var(--text-color)",
                    cursor: "pointer"
                  }}
                >
                  <RiDashboardLine />
                </span>
              )}
            <div
              className="userprofilebar d-flex
                align-items-center flex-column cursor-pointer"
              onMouseEnter={() => setOpenDropdown("userprofile")}
              onMouseLeave={() => setOpenDropdown(null)}
              
            >
              <CiUser className="mobile-tab-size-icon-pr" style={{ fontSize: "20px" }} />
              <p className="m-0">Profile</p>
              {openDropdown === "userprofile" && (
                <div className="position-absolute z-3 top-18">
                  <Modal />
                </div>
              )}
            </div>
            <div
              onClick={() => handleRedirect("/wishlist")}
              style={{ textDecoration: "none", color: "black", position:'relative' }}
              className={({ isActive }) =>
                isActive ? "wishlist-link active" : "wishlist-link"
              }
            >
              <div
                className="wishlist-icon-wrapper"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  cursor:'pointer'
                }}
              >
                <CiHeart className="mobile-tab-size-icon-w" style={{ fontSize: "20px" }} />
                <p className="m-0">whishlist</p>
              </div>
              <span className="wishlist-count absolute text-white rounded-full d-flex justify-content-center align-items-center" style={{backgroundColor:"#ff8272", marginTop:'-47px', right:'1/2', width: "18px", height:"18px", borderRadius:'50%', fontSize:'14px', marginLeft:'39px'}}>
               {wishlist?.length > 0 ? wishlist.length : 0}
              </span>
            </div>
            <div onClick={() => handleRedirect("/bag")} className={({ isActive }) =>
              isActive ? "bag-link active" : "bag-link"
            } style={{ color: "black", textDecoration: "none", position:'relative' }}>
              <div
                className="bagcartbar bag-icon-wrapper d-flex
                align-items-center flex-column"
              >
                <BsBag className="mobile-tab-size-icon-b" style={{ fontSize: "15px" }} />
                <p className="m-0">Bag</p>
              </div>
              <span className="bag-count absolute text-white rounded-full d-flex justify-content-center align-items-center" style={{backgroundColor:"#ff8272", marginTop:'-47px', right:'1/2', width: "18px", height:"18px", borderRadius:'50%', fontSize:'14px', marginLeft:'19px'}}>
              {state.cart.length || 0}
              </span>
              {/* {console.log('state.cart', state.cart)} */}
            </div>
            <div
              className="mobile-nav-button  cursor-pointer d-none"

            >
              <RxHamburgerMenu onClick={handleOpenTogglemenu} className="mobile-tab-size-icon" style={{ fontSize: "20px" }} />

            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;