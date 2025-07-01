import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice.jsx"; // Auth slice ko import karein
import wishlistReducer from "./wishlistSlice.jsx"; // Wishlist slice ko import karein
import userSlice from "./userSlice.jsx"
import notificationSlice from "./notificationSlice.jsx"
import sidebarSlice from "./sidebarSlice.jsx"; // Sidebar reducer import karein
import analyticsSlice from "./analyticsSlice.jsx"

const store = configureStore({
  reducer: {
    auth: authReducer,
    wishlist: wishlistReducer, // Wishlist reducer ko store me add karein
    usersData: userSlice,
    notifications: notificationSlice,
    adminsidebar: sidebarSlice, // Store mein sidebar reducer add karein
    analytics: analyticsSlice, // Store mein sidebar reducer add karein
  },
});

export default store;
