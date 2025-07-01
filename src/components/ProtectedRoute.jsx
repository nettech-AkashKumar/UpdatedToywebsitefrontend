import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const auth = isAuthenticated || localStorage.getItem("isAuthenticated") === "true";
 const role = (user?.role || storedUser?.role || "").toLowerCase();


  if (!auth) return <Navigate to="/login" />;
  if (!allowedRoles.map(r => r.toLowerCase()).includes(role)) {
  return <Navigate to="/unauthorized" />;
}


  return <Outlet />;
};

export default ProtectedRoute;
