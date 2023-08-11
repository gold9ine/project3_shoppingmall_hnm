import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import { useLocation } from "react-router";
// 방법 1
// import Login from "../pages/Login";

// const PrivateRoute = ({ authenticate, setAuthenticate }) => {
const PrivateRoute = ({ authenticate }) => {
  const location = useLocation();
  // console.log("lll", location);

  return authenticate ? (
    <ProductDetail />
  ) : (
    // 방법 1
    // <Login setAuthenticate={setAuthenticate} />
    // 방법 2
    <Navigate to="/login" replace state={{ to: location }} />
  );
};

export default PrivateRoute;
