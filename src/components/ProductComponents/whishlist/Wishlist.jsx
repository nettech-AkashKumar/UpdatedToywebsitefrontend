import React, { useEffect, useState } from "react";
import "./Wishlist.css";
import PageLayout from "../../../layouts/PageLayout";
import Herosection_Userprofile from "../herosection_userprofile/Herosection_Userprofile";
import Sidebar_userprofile from "../../sidebar_userprofile/Sidebar_userprofile";
import Card from "../card/Card";
import BASE_URL from "../../../Config/config.js";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { removeFromWishlist } from "../../../Redux/wishlistSlice.jsx";
import { useNavigate } from "react-router";



const Wishlist = () => {
  const reduxDispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState([]);
  const wishlist = useSelector((state) => state.wishlist.wishlist, shallowEqual);
  console.log('wishlist state via wishlist page', wishlist);

  useEffect(() => {
    console.log("Wishlist Updated", wishlist)
  }, [wishlist])

  const token = localStorage.getItem("token")?.trim();
  let userId = null;
  if (token) {
    try {
      const decoded = jwtDecode(token)
      userId = decoded.id
    } catch (error) {
      console.error('Error decoding token', error)
    }
  }
  console.log('UserId from token', userId)

  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/wishlist/get`, {
          params: { userId },
        });
        const fetchedData = response.data.data;
        console.log("API Response Data", fetchedData);
        setWishlistItems(fetchedData);
      } catch (error) {
        toast.error("Error fetching wishlist data");
        console.error(error);
      }
    };
    fetchWishlist();
  }, [userId]);



  useEffect(() => {
    console.log("Wishlist Items Updated in State", wishlistItems)
  }, [wishlistItems])

  const removeItem = async (itemId) => {
    try {
      //get productId from wishlist item before deleting
      const itemToRemove = wishlistItems.find((item) => item._id === itemId)
      if (!itemToRemove) {
        toast.error("Item not found")
        return
      }
      const { productId } = itemToRemove;

      await axios.delete(`${BASE_URL}/api/wishlist/delete-wishlist-item`, {
        data: {
          _id: itemId,
          userId: userId,
          productId
        }
      })
      // remove from localstorage
      setWishlistItems((prev) => prev.filter((item) => item._id !== itemId));
      // update redux store this triggeer re render in navbar
      reduxDispatch(removeFromWishlist({ _id: itemId, userId, productId }))
      toast.success("Item remove successfully")
    } catch (error) {
      toast.error("Failed to remove item")
    }
  }

  const navigate = useNavigate();
  const goToProduct = () => {
    navigate(`/productsdetails/${product._id}`)
    console.log("Navigating to kk: ", `/productsdetails/${product._id}`)
  }

  return (
    <div>
      <PageLayout>
        <div>
          <Herosection_Userprofile
            heading="Your Profile "
            subheading=" Wishlist"
          />
          <div className="wishlist-container" style={{ display: "flex", gap: "40px" }}>
            <Sidebar_userprofile />

            <div className="wissee" style={{ overflow: "auto" }}>
              <div className="d-flex align-items-center justify-content-between mb-4" style={{ border: "1px solid #DBDBDB", padding: "8px 6px", borderRadius: "4px" }}>
                <div className="d-flex align-items-center gap-3"><input type="checkbox" className="checkbox-input" /><p className="m-0">{selectedItems.length}/{wishlistItems.length} Items Selected</p></div>
                <div onClick={async () => {
                  for (const id of selectedItems) {
                    await removeItem(id);
                  }
                  setSelectedItems([])
                }}>
                  <p className="m-0" style={{ cursor: 'pointer' }}>Remove</p>
                </div>
              </div>
              <div className="wishlist-cardcontainer" style={{ width: "100%", height: "450px", display: "grid", gridTemplateColumns: "repeat(4,0fr)", gap: "45px", flexWrap: "wrap" }}>
                {wishlistItems.length > 0 ? (
                  wishlistItems.map((item, index) => {
                    console.log('product from wishlist.jsx', item);
                    return <Card onClick={goToProduct} key={index} data={{ ...item.productId, wishlistId: item._id}} selectedItems={selectedItems} setSelectedItems={setSelectedItems} removeItemFromState={removeItem} />
                  })
                ) : (
                  <p style={{ width: '70vw', margin: "0 auto" }}>No items in wishlist</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </div>
  );
};

export default Wishlist;
