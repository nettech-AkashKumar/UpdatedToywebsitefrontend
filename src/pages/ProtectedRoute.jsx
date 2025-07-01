// ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const role = localStorage.getItem("role");

  // only allow admin
  return role === "admin" ? <Outlet /> : <Navigate to="/something-wrong" replace />;
};

export default ProtectedRoute;
