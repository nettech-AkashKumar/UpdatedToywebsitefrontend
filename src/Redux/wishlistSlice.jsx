//wishlistSlice is for state management for addtowishlist item, removetowishlistitem

import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const token = localStorage.getItem("token")?.trim();
let userId = null;
if (token) {
  try {
    const decoded = jwtDecode(token);
    userId = decoded.id;
  } catch (error) {
    console.log("Error decoding token", error);
  }
}
console.log("userId from wishlist slice", userId);

// Retrieve authentication state & user data from localStorage
const storedAuth = localStorage.getItem("isAuthenticated") === "true";
// console.log('storedAuth', storedAuth);
const storedUser = JSON.parse(localStorage.getItem("loggedInUser")) || null;
// Load wishlist from localStorage
 const loadWishlistFromStorage = () => {
  //  const storedWishlist = localStorage.getItem("wishlist");
  //  return storedWishlist ? JSON.parse(storedWishlist) : [];
  const storedWishlist = storedUser
    ? JSON.parse(localStorage.getItem(`wishlist_${storedUser?.id}`)) || []
    : []; // Retrieve wishlist for logged-in user
  console.log("storedWishlist", storedWishlist);
  return storedWishlist;
 };

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    isAuthenticated: storedAuth,
    user: storedUser,
    wishlist: loadWishlistFromStorage(),
  },
  reducers: {
    addToWishlist: (state, action) => {
      const {_id, userId, productId } = action.payload;
      console.log("userId, productId from wishlistSlice", _id, userId, productId);

      // Check if the item already exists to avoid duplicates
      const existingItem = state.wishlist.find(
        (item) => item.productId  === action.payload.productId 
      );
      console.log('existing item from wishlist slice', existingItem)
      if (!existingItem) {
        state.wishlist.push(action.payload);
        localStorage.setItem(
          `wishlist_${storedUser?.id}`,
          JSON.stringify(state.wishlist)
        ); // Save to localStorage
      }
    },
    removeFromWishlist: (state, action) => {
      const { _id, userId, productId } = action.payload;
      console.log(
        "removeId, userId, productId from removeFromWishlist",{
        _id,
        userId,
        productId
        }
      );
      if (!userId || !productId) {
        console.error(" userId & product is missing");
        return;
      }
      
      console.log("Removing item with ID:", action.payload); // Debugging
      state.wishlist = state.wishlist.filter(
        (item) => item.productId !== action.payload.productId
      );
      localStorage.setItem(
        `wishlist_${storedUser?.id}`,
        JSON.stringify(state.wishlist)
      ); // Save updated list
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;



