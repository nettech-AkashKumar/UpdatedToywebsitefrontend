import React, { useState, useEffect, useMemo } from "react";
import "./ProdcutsDetailsPage.css";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { GrCart } from "react-icons/gr";
import PageLayout from "../../layouts/PageLayout";
import { CiDeliveryTruck, CiHeart } from "react-icons/ci";
import { BiDetail } from "react-icons/bi";
import return_img from "../../assets/image/return.png";
import customer_reviews_img from "../../assets/image/review-star.png";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
// import Productrecent_Container from "../../components/ProductComponents/productrecent_container/productrecent_container";
import Productrecent_Containertwo from "../../components/ProductComponents/productrecent_container/Productrecent_Containertwo";
import axios from "axios";
import BASE_URL from "../../Config/config.js";
import { useProductContext } from "../../context/Products/Product.jsx";
import SubmitUserCommit from "./SubmitUserCommit.jsx";
import ReviewCards from "./ReviewCards.jsx";
import { CartState } from "../../context/Context.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaHeart } from "react-icons/fa";
import ExchangeReturnModal from "./ExchangeReturnModal.jsx";
import { useWishlistHandler } from "../../Redux/useWishlistHandler.jsx";
import { useCartHandler } from "../../Redux/useCartHandler.jsx";
import { useSelector } from "react-redux";
import EnterpinModal from "../../components/CartComponent/EnterpinModal.jsx";

const ProductsDetailsPage = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [storedProduct, setStoredProduct] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");

  //state to show and setshow
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  // get product data
  useEffect(() => {
    const getFetchData = async () => {
      const res = await axios.get(`${BASE_URL}/api/products`);
      if (res.data.success) {
        const products = res.data.data.reverse();
        setStoredProduct(products);
        console.log("ppr", products);
      }
    };
    getFetchData();
  }, []);

  const params = useParams();
  console.log("Params:", params);
  const { id } = useParams();
  console.log("Product ID", id);
  console.log("storedProduct", storedProduct);

  const { getSingleProduct, singleProduct } = useProductContext();
  console.log("single product", singleProduct);

  const singltonProduct = getSingleProduct(storedProduct, id);
  console.log("Singleton Product:", singltonProduct);

  // filter product by its id
  const product = storedProduct.find((item) => item._id === id);

  useEffect(() => {
    if (product?.image?.length > 0) {
      setSelectedImage(product.image[0]?.url);
    }
  }, [product]);

  useEffect(() => {
    if (!product?.image?.length) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % product?.image.length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [product?.image?.length]);

  // to store product view detail in recent activity page
  useEffect(() => {
    if (product) {
      let recentActivity =
        JSON.parse(localStorage.getItem("recentActivity")) || [];
      // avoid duplicate save data
      const isAlreadySaved = recentActivity.some(
        (item) => item._id === product._id
      );
      if (!isAlreadySaved) {
        recentActivity.unshift(product);
        // limit the number of recent activity
        if (recentActivity.length > 10) {
          recentActivity = recentActivity.slice(-10); //keep last 10
        }
        localStorage.setItem("recentActivity", JSON.stringify(recentActivity));
      }
    }
  }, [product]);

  //to scroll page up
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();
  const backUrl = location.state?.from || "/";

  // state for exchange product
  const [showexchange, setShowExchange] = useState(false);

  // handle wishlist, cart in product details page
  const { isWishlisted, toggleWishlist } = useWishlistHandler(product);
  const { addToCart } = useCartHandler(product);
  const cart = useSelector((state) => state.cart?.cart || []);
  const isInCart = useMemo(() => {
    return cart.some((item) => item.productId === product._id);
  }, [cart, product?._id]);

  // show enterpinmodal
  const [selectedPin, setSelectedPin] = useState(() => {
    return localStorage.getItem("selectedPin") || ""
  });
  const [showEnterPinModal, setShowEnterPinModal] = useState(false);

  const handlePinSubmit = (pin) => {
    setSelectedPin(pin)
    localStorage.setItem("selectedPin", pin)
    handleCloseEnterPinModal();
  }

  const handleOpenEnterPinModal = () => {
    setShowEnterPinModal(true);
  };
  const handleCloseEnterPinModal = () => {
    setShowEnterPinModal(false);
  };

  return (
    <div>
      <PageLayout>
        <button
          onClick={() => navigate(backUrl)}
          style={{
            backgroundColor: "#FF8272",
            color: "white",
            padding: "8px 16px",
            borderRadius: "5px",
            border: "none",
            marginBottom: "20px",
            cursor: "pointer",
          }}
        >
          ← Back to Products
        </button>

        <div className=" py-5">
          <div className="productdetails-maincontainer d-flex justify-content-between">
            {/* left-side-image-container-start */}
            <div
              className="leftside-product-image d-flex"
              style={{ gap: "200px" }}
            >
              <div className="small-product-image">
                <>
                  {product?.image?.map((photo, index) => (
                    <img
                      key={index}
                      onClick={() => setSelectedImage(photo.url)}
                      className="img-fluid"
                      src={`${BASE_URL}${photo.url}`}
                      alt={`thumbnail-${index}`}
                      style={{
                        border:
                          selectedImage === photo.url
                            ? "2px solid #ff8272"
                            : "2px solid transparent",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </>
              </div>
            </div>
            <div className="big-product-image">
              <img
                className="img-fluid"
                src={`${BASE_URL}${selectedImage}`}
                alt="pdetailsbig"
              />
            </div>
            {/* mobile? product img container */}
            <div className="slider-container d-none">
              <div className="slider-wrapper">
                {product?.image?.map((photo, index) => (
                  <div
                    key={index}
                    className={`slide-mob ${
                      index === activeIndex ? "active" : ""
                    }`}
                  >
                    <img
                      src={`${BASE_URL}${photo.url}`}
                      alt={`thumbnail-${index}`}
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Pagination dots */}
            <div className="dots">
              {product?.image?.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === activeIndex ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                ></span>
              ))}
            </div>

            {/* left-side-image-container-end */}

            {/* rightside-product-content-start? */}
            <div className="rightside-product-content">
              {/* {console.log('filtered product data', FilterProductData.products)} */}
              <div className="product-name-heading">
                <strong style={{ fontSize: "32px", color: "#3D3D3D" }}>
                  {product?.title}
                </strong>
                <p style={{ color: "#828282" }}>{product?.subtitle}</p>
                <p className="d-flex align-items-center">
                  <span className="d-flex">
                    <MdOutlineStarPurple500
                      style={{ color: "#FFC107", fontSize: "20px" }}
                    />
                    <MdOutlineStarPurple500
                      style={{ color: "#FFC107", fontSize: "20px" }}
                    />
                    <MdOutlineStarPurple500
                      style={{ color: "#FFC107", fontSize: "20px" }}
                    />
                    <MdOutlineStarPurple500
                      style={{ color: "#FFC107", fontSize: "20px" }}
                    />
                    <MdOutlineStarPurple500
                      style={{ fontSize: "20px", color: "#80808045" }}
                    />
                  </span>

                  <span style={{ color: "#828282" }}>
                    I 286 Ratings & 23 Reviews
                  </span>
                </p>
                <p className="d-flex flex-column gap-1">
                  <span style={{ color: "#0A8E45" }}>Special price</span>
                  <span
                    style={{
                      color: "#0A8E45",
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <strong style={{ color: "#3D3D3D", fontSize: "20px" }}>
                      Rs. {product?.new_price}
                    </strong>
                    <del style={{ color: "#00000082" }}>
                      Rs. {product?.old_price}
                    </del>
                    {product?.discount}
                  </span>
                  <span style={{ color: "#0A8E45" }}>
                    inclusive of all taxes
                  </span>
                </p>
                <div className="select-size-pdetails">
                  <p className="mb-2" style={{ color: "#828282" }}>
                    SELECT SIZE
                  </p>
                  <button>OneSize</button>
                </div>
              </div>
              <div
                className="product-size-container "
                style={{ fontFamily: '"Poppins", sans-serif' }}
              ></div>
              <div
                className="color-select py-4"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                <p style={{ fontSize: "23px" }}>Colors</p>
                <div className="color-circle">
                  <div style={{ backgroundColor: "black" }}></div>
                  <div style={{ backgroundColor: "grey" }}></div>
                  <div style={{ backgroundColor: "#FFA4A4" }}></div>
                </div>
              </div>

              <div
                className="right-product-details-btn d-flex align-items-center gap-4"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!isInCart) addToCart();
                  }}
                  disabled={isInCart}
                  className="addtocart-productdetails-btn d-flex align-items-center gap-3"
                  style={{
                    backgroundColor: "#FF8272",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: isInCart ? "not-allowed" : "pointer",
                    opacity: isInCart ? 0.7 : 1,
                  }}
                >
                  <GrCart /> {isInCart ? "In Cart" : "Add To Cart"}
                </button>
                {product && (
                  <button
                    className="addtocart-productdetails-btn d-flex align-items-center gap-3"
                    style={{
                      backgroundColor: "#FF8272",
                      color: "white",
                      padding: "10px 20px",
                      borderRadius: "5px",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      e.preventDefault();
                      toggleWishlist();
                    }}
                  >
                    {isWishlisted ? <FaHeart /> : <CiHeart />}
                    {isWishlisted ? "In Wishlist" : "Wishlist"}
                  </button>
                )}
              </div>

              <div
                className="delivery-option-container py-3"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                <div className="delivery-content1 d-flex flex-column gap-3">
                  <strong
                    className="d-flex align-items-center gap-4"
                    style={{ fontSize: "23px" }}
                  >
                    DELIVERY OPTIONS
                    <CiDeliveryTruck />
                  </strong>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={handleOpenEnterPinModal}
                    className="delivery-enterpincode-input"
                  >
                    {selectedPin ? (
                      <div
                        style={{
                          border: "1px solid #ccc",
                          padding: "10px 15px",
                          borderRadius: "6px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          backgroundColor: "#f9f9f9",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <strong>{selectedPin}</strong>
                          <span
                            style={{
                              backgroundColor: "#2dd4bf",
                              borderRadius: "50%",
                              width: "18px",
                              height: "18px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "12px",
                              color: "white",
                            }}
                          >
                            ✓
                          </span>
                        </div>
                        <span
                          style={{
                            color: "#ff8272",
                            fontWeight: "600",
                            cursor: "pointer",
                            fontSize: "14px",
                          }}
                        >
                          CHANGE
                        </span>
                      </div>
                    ) : (
                      <>
                        <input
                          type="search"
                          placeholder="Enter Pin Code"
                          readOnly
                        />
                        Check
                      </>
                    )}
                  </div>
                  {showEnterPinModal && (
                    <EnterpinModal
                      onClose={handleCloseEnterPinModal}
                      onPinSubmit={handlePinSubmit}
                    />
                  )}
                  <p style={{ color: "#828282" }}>
                    Please enter PIN code to check delivery time & Pay on
                    Delivery Availability
                  </p>
                </div>
                <div className="delivery-content2">
                  <p>100% ORIGINAL PRODUCTS</p>
                  <p>PAY ON DELIVERY MIGHT BE AVAILABLE</p>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <p>EASY {product?.returnpolicy} RETURNS AND EXCHANGE</p>
                    <p
                      onClick={() => setShowExchange(true)}
                      style={{ color: "#ff8272", cursor: "pointer" }}
                    >
                      More info
                    </p>
                    {showexchange && (
                      <ExchangeReturnModal
                        onClose={() => setShowExchange(false)}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div
                className="product-details-container d-flex flex-column gap-4 mt-4"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                <strong className="d-flex align-items-center gap-3">
                  PRODUCT DETAILS <BiDetail />
                </strong>
                <div className="product-details-para">
                  <p style={{ color: "#3D3D3D" }}>
                    Brand Name:{" "}
                    <span style={{ color: "#828282" }}> {product?.brand}</span>
                  </p>
                  <p style={{ color: "#3D3D3D" }}>
                    Product Type:{" "}
                    <span style={{ color: "#828282" }}>{product?.subcategory} -{product?.type}</span>
                  </p>
                   <p style={{ color: "#3D3D3D" }}>
                    Highlights:{" "}
                    <span style={{ color: "#828282" }}> {product?.keyfeatures}</span>
                  </p>
                  {/* only show this section for electronics category */}
                  {product?.category?.toLowerCase() === "electronics" && (
                    <>
                   <p style={{ color: "#3D3D3D" }}>
                    Bluetooth Version:{" "}
                    <span style={{ color: "#828282" }}>{product?.bluetooth}</span>
                  </p> 
                  <p style={{ color: "#3D3D3D" }}>
                    Battery Life:{" "}
                    <span style={{ color: "#828282" }}>
                      {" "}
                      Up to {product?.batteryoperated} 
                    </span>
                  </p>
                  <p style={{ color: "#3D3D3D" }}>
                    Weight:{" "}
                    <span style={{ color: "#828282" }}>{product?.weight}</span>
                  </p>
                  <p style={{ color: "#3D3D3D" }}>
                    Warrantyt:{" "}
                    <span style={{ color: "#828282" }}>
                      {product?.warranty} Manufacturer Warranty
                    </span>
                  </p>
                   </>
                  )}
                  <p style={{ color: "#3D3D3D" }}>
                    In the Box:{" "}
                    <span style={{ color: "#828282" }}>
                      {" "}
                      {product?.description}
                    </span>
                  </p>
                  <p style={{ color: "#3D3D3D" }}>
                    Product Code:{" "}
                    <span style={{ color: "#828282" }}>
                      {" "}
                      {product?.productcode}
                    </span>
                  </p>
                </div>
              </div>

              <div
                className="return-policy-container d-flex gap-4 py-4"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                <div>
                  <img src={return_img} alt="return_img" />
                </div>
                <div>
                  <strong style={{ fontSize: "20px" }}>
                    Return within {product?.returnpolicy}
                  </strong>
                  <span>
                    {" "}
                    of <br /> receiving your order
                  </span>
                </div>
              </div>

              <div className="reviews-bar">
                <p
                  className="d-flex gap-4"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  Customer Reviews{" "}
                  <img src={customer_reviews_img} alt="customer_reviews-img" />
                </p>

                <div className="reviews-details d-flex gap-5">
                  <div>
                    <strong
                      className="d-flex gap-3 fs-4 align-items-center"
                      style={{ fontFamily: '"Poppins", sans-serif' }}
                    >
                      4.5{" "}
                      <span className="d-flex">
                        {" "}
                        <MdOutlineStarPurple500
                          style={{ color: "#FFC107", fontSize: "20px" }}
                        />
                        <MdOutlineStarPurple500
                          style={{ color: "#FFC107", fontSize: "20px" }}
                        />
                        <MdOutlineStarPurple500
                          style={{ color: "#FFC107", fontSize: "20px" }}
                        />
                        <MdOutlineStarPurple500
                          style={{ color: "#FFC107", fontSize: "20px" }}
                        />
                        <MdOutlineStarPurple500
                          style={{ fontSize: "20px", color: "#80808045" }}
                        />
                      </span>
                    </strong>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#828282",
                        margin: "0",
                        fontFamily: '"Poppins", sans-serif',
                      }}
                    >
                      519 Verified Buyers
                    </p>
                  </div>

                  <div className="w-100">
                    {/* <div className=" d-flex"> */}
                    <div className=" ">
                      {[60, 30, 20, 10, 0].map((item) => (
                        <div
                          className="w-100 d-flex align-items-center gap-2
                       "
                        >
                          <p className="d-flex align-items-center p-0  m-1">
                            5{" "}
                            <MdOutlineStarPurple500
                              style={{ fontSize: "20px", color: "#80808045" }}
                            />{" "}
                          </p>
                          <div
                            className="w-100 h-[8px]"
                            style={{
                              backgroundColor: "#cfcacafa",
                              borderRadius: "30px",
                            }}
                          >
                            <div
                              style={{
                                backgroundColor: "#3CBA5F",
                                width: `${item}%`,
                                height: "8px",
                                borderRadius: "30px",
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <ReviewCards />
              <div
                className="share-experience-conatiner d-flex justify-content-between py-5"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                <div>
                  <p>Share your Experience</p>
                  <span className="d-flex">
                    <MdOutlineStarPurple500
                      style={{ color: "#FFC107", fontSize: "20px" }}
                    />
                    <MdOutlineStarPurple500
                      style={{ color: "#FFC107", fontSize: "20px" }}
                    />
                    <MdOutlineStarPurple500
                      style={{ color: "#FFC107", fontSize: "20px" }}
                    />
                    <MdOutlineStarPurple500
                      style={{ color: "#FFC107", fontSize: "20px" }}
                    />
                    <MdOutlineStarPurple500
                      style={{ color: "#FFC107", fontSize: "20px" }}
                    />
                  </span>
                </div>
                <button
                  onClick={openModal}
                  className="submit-reviews-pdetails"
                  style={{
                    backgroundColor: "#FF8272",
                    color: "white",
                    width: "200px",
                    height: "40px",
                    padding: "5px 5px",
                  }}
                >
                  Submit Reviews
                </button>
              </div>
            </div>
            {/* rightside-product-content-end? */}
          </div>
          {/* <div className=" py-6">
            {" "}
            <Productrecent_Container heading="SIMILIAR PRODUCT" />
          </div> */}
          <div className="py-6">
            {" "}
            <Productrecent_Containertwo heading="RECENT VIEWED" />
          </div>
        </div>
      </PageLayout>
      <SubmitUserCommit isOpen={show} onClose={closeModal} />
    </div>
  );
};

export default ProductsDetailsPage;
