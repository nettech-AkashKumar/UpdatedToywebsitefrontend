import React, { useEffect, useState, useRef } from "react";
import "./Admin_Layouts.css";
import adminsidebar_logo from "../../assets/image/footer-logo.png";
import { NavLink, Outlet, useNavigate } from "react-router";
import { MdOutlineDashboard } from "react-icons/md";
import { LiaToolboxSolid } from "react-icons/lia";
import { BiUserPlus } from "react-icons/bi";
import { MdOutlineCategory } from "react-icons/md";
import { FiBox } from "react-icons/fi";
import { LiaSalesforce } from "react-icons/lia";
import { BsBox } from "react-icons/bs";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut, IoIosSearch } from "react-icons/io";
// import { IoMdMoon } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { HiMiniUser } from "react-icons/hi2";
import BASE_URL from "../../Config/config.js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import LogoutModal from "../../components/HomeComponents/Logout/LogoutModal.jsx";
import adminsidebar_logo_mob from "../../assets/image/website-logo.png";
import AnimatedSearchbox from "../../components/HomeComponents/Navbar/AnimatedSearchbox.jsx";
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";
import NotificationToaster from "./NotificationToaster.jsx";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

const Admin_Layouts = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("isAuthentication", isAuthenticated);
  const isOpen = useSelector((state) => state.adminsidebar.isOpen);
  console.log("Sidebar Open State:", isOpen);
  const dispatch = useDispatch();

  const [adminProfile, setAdminProfile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sidebarRef = useRef();
  const toggleButtonRef = useRef();
  console.log("Modal open status:", isModalOpen);

  const navigate = useNavigate();
  const [showToasts, setShowToasts] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light-theme"
  );

  //fetch profile dynamically
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const response = await axios.get(
          `${BASE_URL}/api/users/profile/${userId}`
        );
        // console.log("Fetched user data from admin layout", response.data)
        setAdminProfile({
          ...adminProfile,
          name: response.data.name || "",
          profileImage: response.data.profileImage || "",
        });
        // console.log('profileImage', response.data.profileImage)
        // console.log('adminProfile state after set:', {
        //   name: response.data.name || "",
        //   profileImage: response.data.profileImage || ""
        // });
      } catch (error) {
        console.error("Error fetching profileImage", error);
      }
    };
    fetchProfile();
  }, []);

  //image change
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append("profileImage", file);
    const userId = localStorage.getItem("userId");
    try {
      const response = await axios.put(
        `${BASE_URL}/api/users/profileImage/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setAdminProfile((prev) => ({
        ...prev,
        profileImage: response.data.profileImage,
      }));
    } catch (error) {
      console.error("Error while updating profile image", error);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 320 && window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarOpen &&
        isMobile &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen, isMobile]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/api/admin/support-notifications`
        ); // your new API
        setNotifications(res.data);
      } catch (err) {
        console.error("Error fetching support notifications:", err);
      }
    };

    fetchNotifications();
  }, []);
  const toggleDropdown = () => {
    setShowToasts((prev) => !prev);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark-theme" ? "light-theme" : "dark-theme";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    } else {
      setTheme("light-theme");
      document.body.className = "light-theme";
    }
  }, []);

  return (
    <div className={theme}>
      <div className="admin-panel-body-container" style={{ display: "flex", backgroundColor: "#fff2f1" }}>
        <div
          ref={sidebarRef}
          className={`admin-sidebar  ${sidebarOpen ? "open" : "closed"} ${
            isMobile ? "mobile-view" : ""
          }`}
        >
          <div className="adminsidebar-logo" onClick={() => navigate("/")}>
            <img
              className="adminsidebar-logo-desk  img-fluid"
              src={adminsidebar_logo}
              alt="adminsidebar_logo"
            />
            <img
              className="adminsidebar-logo-mob img-fluid d-none"
              src={adminsidebar_logo_mob}
              alt="adminsidebar_logo"
            />
          </div>

          <ul className="adminsidebar-navlink">
            <li>
              <NavLink to="dashboard" data-tooltip="Dashboard">
                <MdOutlineDashboard />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="product" data-tooltip="Product">
                <LiaToolboxSolid />
                <span>Products</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="user_management" data-tooltip="User Management">
                <BiUserPlus />
                <span>Users</span>
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="category" data-tooltip="Categories">
                <MdOutlineCategory />
                <span>Categories</span>
              </NavLink>
            </li> */}
            <li>
              <NavLink to="orders" data-tooltip="Orders">
                <FiBox />
                <span>Orders</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="sales" data-tooltip="Sales">
                <LiaSalesforce />
                <span>Sales</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="stocks" data-tooltip="Stocks">
                <BsBox />
                <span>Stocks</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="analytics" data-tooltip="Analytics">
                <TbBrandGoogleAnalytics />
                <span>Analytics</span>
              </NavLink>
            </li>
            <li className="settingand-logoutbtn d-none">
              <NavLink to="" data-tooltip="Logout">
                <IoIosLogOut style={{ fontSize: "17px" }} />
                <span>Logout</span>
              </NavLink>
            </li>
            <li className="settingand-logoutbtn d-none">
              <NavLink to="settings" data-tooltip="settings">
                <IoSettingsOutline />
                <span>settings</span>
              </NavLink>
            </li>
          </ul>

          <ul className="adminsidebar-bottom-navlink">
            <li>
              <NavLink
                onClick={() =>
                  isAuthenticated ? setIsModalOpen(true) : navigate("/login")
                }
              >
                <IoIosLogOut style={{ fontSize: "17px" }} />
                {isAuthenticated ? (
                  <span className="adminsidbarlogoutbt">Logout</span>
                ) : (
                  <span>Logout</span>
                )}{" "}
              </NavLink>
              <LogoutModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />
            </li>
            <li>
              <NavLink to="settings">
                <IoSettingsOutline />
                <span>Settings</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="admin-header-content">
          <header className="admin-header">
            <div className="admin-header-title">
              <h1>Overview</h1>
            </div>
            <div className="admin-header-right-conatainer">
              {isMobile && (
                <button
               
                  ref={toggleButtonRef}
                  onClick={() => setSidebarOpen((prev) => !prev)}
                  style={{
                    border: "none",
                    background: "transparent",
                    fontSize: "22px",
                    cursor: "pointer",
                  }}
                >
                  {sidebarOpen ? "" : <HiBars3  className="admin-header-hamburg-btn"/>}
                </button>
              )}
              <div className="admin-header-searchbar d-flex align-items-center gap-2">
                <IoIosSearch className="admin-search-icon" style={{ fontSize: "20px", color: "black" }} />
                <input type="search" placeholder="Search.." />
              </div>

              <div className="d-none admin-header-searchbar-mob">
                {/* for-mobile? */}
                <AnimatedSearchbox className="admin-header-seacrh-btn"/>
              </div>
              <span
                onClick={toggleTheme}
                style={{ cursor: "pointer", fontSize: "20px" }}
              >
                {theme === "dark-theme" ? <IoMdSunny style={{color:"white"}}/> : <IoMdMoon />}
              </span>
              <div
                className="adminbell-icon"
                onClick={toggleDropdown}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid grey",
                  borderRadius: "50%",
                  width: "35px",
                  height: "35px",
                  position: "relative",
                }}
              >
                <CiBellOn 
                 className="admin-header-belicon"
                  style={{
                    width: "22px",
                    height: "22px",
                    objectFit: "contain",
                  }}
                />
                {notifications.length > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "0px",
                      backgroundColor: "#fb7a5b",
                      color: "white",
                      borderRadius: "50%",
                      width: "16px",
                      height: "16px",
                      fontSize: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}
                  >
                    {notifications.length}
                  </span>
                )}
              </div>

              <div
                className="adminuser-icon"
                onClick={() => document.getElementById("uploadInput").click()}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid grey",
                  borderRadius: "50%",
                  width: "35px",
                  height: "35px",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <HiMiniUser
                  style={{
                    width: "22px",
                    height: "22px",
                    objectFit: "contain",
                  }}
                />
                <input
                  type="file"
                  id="uploadInput"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{
                    position: "absolute",
                    opacity: 0,
                    width: "100%",
                    height: "100%",
                    cursor: "pointer",
                  }}
                />
                <img
                  className="img-fluid"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                  src={
                    adminProfile?.profileImage
                      ? `${BASE_URL}/profileImage/${adminProfile.profileImage}`
                      : "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                  }
                  alt="profile"
                />
              </div>
            </div>
          </header>
          <Outlet />
        </div>
      </div>
      <NotificationToaster  trigger={showToasts} />
    </div>
  );
};

export default Admin_Layouts;
