// this is for product details page wishlist code
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToWishlist, removeFromWishlist } from "../Redux/wishlistSlice";
import { addToWishlistItem, removeWishlistItem } from "../Redux/wishlistActionss";
import { jwtDecode } from "jwt-decode";

export const useWishlistHandler = (product) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist || []);

  // Decode userId from token
  const token = localStorage.getItem("token")?.trim();
  let userId = null;
  if (token) {
    try {
      const decoded = jwtDecode(token);
      userId = decoded.id;
    } catch (err) {
      toast.error("Error decoding user token");
    }
  }

//   protect againt undefined product
const isWishlisted = product?._id ? wishlist.some((item) => item.productId === product._id) : false;

  const toggleWishlist = async () => {
    if (!userId) {
      toast.error("Please login to use wishlist!");
      return;
    }

    if(!product?._id) {
        toast.error("Invalid product data")
        return;
    }

    const wishlistItem = wishlist.find((item) => item.productId === product._id);
    const wishlistItemId = wishlistItem?._id || null;

    if (isWishlisted) {
      await removeWishlistItem({ _id: wishlistItemId, userId, productId: product._id });
      dispatch(removeFromWishlist({ _id: wishlistItemId, userId, productId: product._id }));
      const filtered = wishlist.filter((item) => item.productId !== product._id);
      localStorage.setItem(`wishlist_${userId}`, JSON.stringify(filtered));
      toast.success("Item removed from wishlist");
    } else {
      const savedItem = await addToWishlistItem(userId, product._id);
      const newItem = {
        _id: savedItem?._id,
        userId,
        productId: product._id,
        image: product.image,
        title: product.title,
        subtitle: product.subtitle,
        old_price: product.old_price,
        new_price: product.new_price,
        level_range: product.level_range
      };
      dispatch(addToWishlist(newItem));
      localStorage.setItem(`wishlist_${userId}`, JSON.stringify([...wishlist, newItem]));
      toast.success("Item added to wishlist");
    }
  };

  return { isWishlisted, toggleWishlist };
};