import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }
  const showProduct = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="card" style={{ cursor: "pointer" }} onClick={showDetail}>
    {/* <div className="card" onClick={() => showProduct(item.id)}> */}
      <img src={item?.img} />
      <div className="choice">{item?.choice ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div className="new-product">{item?.new ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
