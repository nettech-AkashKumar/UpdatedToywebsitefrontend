import axios from "axios";
import BASE_URL from "../Config/config.js";


// add  wishlist api
export const addToWishlistItem = async (userId, productId) => {
    const response  =  await axios.post(`${BASE_URL}/api/wishlist/add`, {
        userId,
        productId
    })
   return response.data.data;
}

// remove wishlist api
export const removeWishlistItem = async({_id, userId, productId}) => {
    
        axios.delete(`${BASE_URL}/api/wishlist/delete-wishlist-item`, {
        data:{_id, userId, productId}
    })

}