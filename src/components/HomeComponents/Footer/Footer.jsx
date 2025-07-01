import React, {useState} from "react";
import "./footer.css";
import footer_logo from "../../../assets/image/footer-logo.png";
import { Link } from "react-router";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Footer = () => {
    const [Email, setemail] = useState("");

function Sendemail() {
  const Data = {
    to_email: Email,
  };
  const Service_id = "service_dpgsbf6";
  const Template_id = "template_wu1fh3b";
  const user_id = "EUHiNsEs6OSu9YjK7";

  emailjs.send(Service_id, Template_id, Data, user_id)
    .then(function (resposne) {
      toast.success("Message Send Successfully");  // <-- alert replaced here
      document.getElementById('subscribe-email').value = '';
    },
    function (error) {
      console.log(error);
    });
}
  return (
    <div>
      <div className=" p-0">
        <footer className="footer-container d-flex py-5 justify-content-between">
          <div className="footer-content1 ">
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "22px",
                padding: "0",
              }}
            >
              <li className="footer-logo ">
                <img
                  className="img-fluid"
                  src={footer_logo}
                  alt="footer_logo"
                />
              </li>
              <li
                className="footer-hedline-txt"
                style={{
                  fontSize: "19px",
                  fontFamily: '"Poppins", sans-serif',
                }}
              >
                <p>
                  Buy amazing toys for your young ones that create more
                  happiness in your world.
                </p>
              </li>
            </ul>
          </div>
          <div
            className="footer-content-left-sidemain"
            style={{ display: "flex", gap: "270px" }}
          >
            {/* 2-3div? */}
            <div
              className="footercontent23"
              style={{ display: "flex", gap: "150px" }}
            >
              <div
                className="footer-content2"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                <ul
                  className="d-flex flex-column gap-3 "
                  style={{ fontSize: "19px" }}
                >
                  <li className="product-txt">
                    <strong>product</strong>
                  </li>
                  <li>
                    <Link>Men</Link>
                  </li>
                  <li>
                    <Link>Women</Link>
                  </li>
                  <li>
                    <Link>Kids</Link>
                  </li>
                  <li>
                    <Link>Home</Link>
                  </li>
                  <li>
                    <Link>Beauty</Link>
                  </li>
                  <li>
                    <Link>Electronics</Link>
                  </li>
                </ul>
              </div>
              <div
                className="footer-content3"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                <ul
                  className="d-flex flex-column gap-3"
                  style={{ fontSize: "19px" }}
                >
                  <li className="resource-txt">
                    <strong>Resources</strong>
                  </li>
                  <li>
                    <Link>Blog</Link>
                  </li>
                  <li>
                    <Link>Newsletter</Link>
                  </li>
                  <li>
                    <Link>Help centre</Link>
                  </li>
                  <li>
                    <Link>Contact us</Link>
                  </li>
                  <li>
                    <Link to="/policy">Shipping policy</Link>
                  </li>
                  <li>
                    <Link to="/policy">Refund policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="footer-content4"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              <ul className="stayupdate-txt">
                <li style={{ fontSize: "19px" }}>
                  <strong>Stay up to date</strong>
                </li>
              </ul>
              <ul className="footer-subscriber-section">
                <li className="footer-subscriberbtn">
                  <input
                    className="footer-email-subscriber-input"
                    style={{
                      backgroundColor: "#FF8272 ",
                      color: "white",
                      padding: "5px 20px",
                      borderRadius: "3px",
                      outline: "none",
                    }}
                    type="email"
                    id="subscribe-email"
                    name="email"
                    placeholder="Enter Your Email"
                    onChange={(e)=>{setemail(e.target.value)}}
                  />{" "}
                  <button
                    className="footersubscribe-btn"
                    style={{
                      border: "1px solid #FF8272",
                      color: "#FF8272",
                      padding: "5px 20px",
                      borderRadius: "3px",
                    }}
                    type="button"
                    onClick={()=>{Sendemail()}}
                  >
                    Subscribe
                  </button>
                </li>
              </ul>
              <ul className="footer-socialfollow d-flex flex-column gap-3">
                <li className="followus-txt" style={{ fontSize: "19px" }}>
                  Follow Us
                </li>
                <li className="footer-social-scetion d-flex gap-3 fs-4">
                  <Link
                    className="footersocial-icon"
                    style={{ color: "black" }}
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    className="footersocial-icon"
                    style={{ color: "black" }}
                  >
                    <FaFacebook />
                  </Link>
                  <Link
                    className="footersocial-icon"
                    style={{ color: "black" }}
                  >
                    <FaXTwitter />
                  </Link>
                  <Link
                    className="footersocial-icon"
                    style={{ color: "black" }}
                  >
                    <FaYoutube />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <div className="bottom-footer d-flex justify-content-between">
          <p style={{ fontFamily: '"Inter", sans-serif' }}>
            © 2025 Kasper UI. All rights reserved.
          </p>
          <p
            className="d-flex gap-3 footer-bottom-right"
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            <Link
              to="/addproduct-model"
              style={{ textDecoration: "none", color: "black" }}
            >
              Terms
            </Link>
            <Link style={{ textDecoration: "none", color: "black" }}>
              Privacy
            </Link>
            <Link style={{ textDecoration: "none", color: "black" }}>
              Cookies
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Footer;
