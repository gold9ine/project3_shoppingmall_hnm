import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";

// 방법 1
// import Login from "../pages/Login";
// const PrivateRoute = ({ authenticate, setAuthenticate }) => {
//   return authenticate ? (
//     <ProductDetail />
//   ) : (
//     <Login setAuthenticate={setAuthenticate} />
//   );
// };

// 방법 2
// import { useLocation } from "react-router";
// const PrivateRoute = ({ authenticate }) => {
//   const location = useLocation();

//   return authenticate ? (
//     <ProductDetail />
//   ) : (
//     <Navigate to="/login" replace state={{ to: location }} />
//   );
// };

// 방법 3 _ useSelector 사용 PrivateRoute 에서 authenticate 판단
import { useSelector } from "react-redux";
const PrivateRoute = () => {
  const authenticate = useSelector((state) => state.auth.authenticate);
  return authenticate == true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
