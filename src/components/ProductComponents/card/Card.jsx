import React, { useEffect, useMemo, useState } from "react";
import "./Card.css";
// import card_image from "../../../assets/image/card-image.png";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import BASE_URL from "../../../Config/config.js";
import { CartState } from "../../../context/Context.jsx";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { addToWishlist, removeFromWishlist } from "../../../Redux/wishlistSlice.jsx"
import { addToWishlistItem, removeWishlistItem } from "../../../Redux/wishlistActionss.jsx"

const Card = ({ data, selectedItems, setSelectedItems }) => {
  const {
    _id: productId,
    title,
    subtitle,
    level_range,
    old_price,
    new_price,
    discount,
    image,
    brand,
    color,
    size,
    category,
    subcategory,

  } = data
  console.log('datass', data)
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const goToProduct = () => {
    navigate(`/productsdetails/${data._id}`, {
      state: { from: pathname}
    })
    console.log("Navigating to: ", `/productsdetails/${data._id}`)
  }

  // state for cart
  const [userCart, setUserCart] = useState([]);

  // cart Context and Redux dispatxch
  const { state, dispatch: cartDispatch } = CartState();
  const reduxDispatch = useDispatch();

  // to verify userId via token
  const token = localStorage.getItem("token")?.trim();
  let userId = null;
  if (token) {
    try {
      const decoded = jwtDecode(token); //decode token
      userId = decoded.id;
    } catch (error) {
      toast.error("Error decoding token", {
        position: 'top-center',
        autoClose: 3000
      })
    }
  }

  useEffect(() => {
    const userId = localStorage.getItem('userId')
    if (userId) {
      const storedCart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || []
      setUserCart(storedCart)
    }
  }, []);
  //for cart
  console.log('Current userCart', userCart)

  // handle add to cart
  const handleAddTOCart = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const userId = localStorage.getItem("userId");

    if (!userId) {
      toast.error("Please login to add items in the cart!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/api/cart/add`,
        {
          userId,
          productId,
          title,
          subtitle,
          image,
          old_price,
          new_price,
          level_range,
          discount,
          brand,
          category,
          subcategory,
          quantity: 1,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      console.log("Cart Response", data);

      if (response.status === 200 && data.data && data.data._id) {
        const updatedCart = [...userCart, data.data];
        setUserCart(updatedCart);
        localStorage.setItem(`cart_${userId}`, JSON.stringify(updatedCart));
        cartDispatch({
          type: "ADD_TO_CART",
          payload: data.data,
        });

        toast.success("Item successfully added to cart!", {
          position: "top-center",
          autoClose: 3000,
        });
      } else {
        toast.error(data.message || "Failed to add item to cart", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Cart add error:", error.response?.data || error.message);

      toast.error("Something went wrong, Please try again later", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  // const isInCart = userCart.some((item) => item.productId === productId);
  // console.log('productId', productId, isInCart)
  // console.log('All Cart Items:', userCart)

  // const productId = data._id;

  // wishlist functionality
  // const [isWishlistedState, setIsWishlistedState] = useState(false);
  const wishlist = useSelector((state) => state.wishlist.wishlist || []);  //wishlist is fetch from redux store using useSelector
  console.log('Wishlist fetched via useSelector', wishlist);

  //this code check wheather the product present in the wishlist or not
  const isWishlisted = useMemo(() => {
    return wishlist.some((item) =>
      // console.log("Comparing item:", item, "with _id", _id);
      item.productId === productId);
  }, [JSON.stringify(wishlist), productId]);

  // console.log("Current Product ID (_id)", _id)
  console.log('iswishlisted from card', isWishlisted)


  const handleWishlist = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    console.log("Before Click - isWishlisted", isWishlisted)
    console.log("Wishlis Before Update", wishlist)

    if (!userId) {
      toast.error("Please login to add items in the wishlist!", {
        position: 'top-center',
        autoClose: 3000,
      })
    }
    console.log('Wishlist00', wishlist)
    const wishlistItem = wishlist.find((item) => item.productId === productId)
    const wishlistItemId = wishlistItem?._id || null;
    console.log('wishlistItemId', wishlistItemId)

    if (isWishlisted) {
      await removeWishlistItem({ _id: wishlistItemId, userId, productId });
      reduxDispatch(removeFromWishlist({ _id: wishlistItemId, userId, productId }))
      const filteredWishlist = wishlist.filter((item) => item.productId !== productId)
      localStorage.setItem(`wishlist_${userId}`, JSON.stringify(filteredWishlist))
      // setIsWishlistedState(false);
      console.log('_id: wishlistItemId, userId, productId:_id from card', { _id: wishlistItemId, userId, productId })
      toast.success("Item removed from wishlist", {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      const savedItem = await addToWishlistItem(userId, productId);
      reduxDispatch(addToWishlist({ _id: savedItem?._id, userId, productId, image, title, subtitle, old_price, new_price, level_range }))
      const updatedWishlist = [...wishlist, { _id: savedItem?._id, userId, productId, image, title, subtitle, old_price, new_price, level_range }]
      localStorage.setItem(`wishlist_${userId}`, JSON.stringify(updatedWishlist));
      // setIsWishlistedState(true)
      toast.success("Item added to wishlist", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  // useEffect(() => {
  //   const updated = wishlist.some((item) => item.productId === productId)
  //   setIsWishlistedState(updated)
  // }, [wishlist, productId]);


  //  if (!data) return null;
  return (
    <div className="" onClick={goToProduct}>
      <div className="card-container border">
        <div className="card-img">
          {pathname !== "/wishlist" && (
            <div onClick={handleWishlist} className="whishlisticon-card">
              {/* {isWishlistedState ? (<FaHeart color="#ff8272"/>) : (<CiHeart/>)}  */}
              {isWishlisted ? (<FaHeart color="#ff8272" />) : (<CiHeart />)}
            </div>
          )}
          {pathname === "/wishlist" && (
            <input type="checkbox" className="checkbox-input-card"
              checked={selectedItems.includes(data._id)}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedItems((prev) => [...prev, data._id]);
                } else {
                  setSelectedItems((prev) => prev.filter((id) => id !== data._id))
                }
              }}
            />
          )}
          <Link to="/productsdetails">
            {/* <img src={data?.imageURL?.[0]} alt="card_image" /> */}
            <img src={data.image?.[0]?.url ? `${BASE_URL}${data.image[0]?.url}` : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCeVhPcF0B061dWx6Y2p6ZshztnAoVQI59g&s"} alt="" />
          </Link>
        </div>
        <div className="card-product-detail-container">
          <div className="card-heading">
            <h3 style={{ fontSize: "22px" }}>{data.title}</h3>
          </div>
          <div className="card-rating-conatiner">
            <div className="card-star">
              <p className="d-flex align-items-center gap-3">
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
                <span style={{ fontSize: "12px" }}>{data.rating}</span>
              </p>
              <p className="d-flex align-items-center justify-content-between">
                <span style={{ color: "#828282", fontSize: "16px" }}>
                  {data.subtitle}
                </span>{" "}
                <span style={{ color: "#28C76F" }}>{data.discount}</span>
              </p>
            </div>
          </div>

          <div className="price-btn">
            <p className="m-0">
              <strong style={{ fontSize: "20px" }}>Rs.{data.new_price}</strong>
            </p>
            <p className="d-flex align-items-center justify-content-between m-0">
              <del>Rs.{data.old_price}</del>{" "}
              <button
                className="addtocart-btncard"
                style={{
                  border: "1px solid #d0c8c8",
                  borderRadius: "12px",
                  padding: "4px 10px",
                }}
                onClick={handleAddTOCart}
              >
                {/* {isInCart ? "Go to Bag" : "Add to Cart"} */}
                Add to Cart
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
