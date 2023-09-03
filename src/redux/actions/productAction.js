import React, { useEffect, useState } from "react";
import { productActions } from "../reducers/productReducer";

// let [products, setProducts] = useState([]);
// let [error, setError] = useState("");
function getProducts(keyword) {
  return async (dispatch, getState) => {
    try {
      let url = `https://my-json-server.typicode.com/gold9ine/project3_shoppingmall_hnm/products?q=${keyword}`;
      let response = await fetch(url);
      let data = await response.json();
      //   console.log('data : ', data);
      // setProducts(data);
      // dispatch({ type:"GET_PRODUCT_SUCCESS", payload:{ data } });
      dispatch(productActions.getAllProducts({ data }));
      if (data.length < 1) {
        if (keyword !== "") {
          //   setError(`${keyword}와 일치하는 상품이 없습니다`);
        } else {
          throw new Error("결과가 없습니다");
        }
      }
      //   setProducts(data);
    } catch (err) {
      //   setError(err.message);
    }
  };
}

function getProductDetail(id) {
  return async (dispatch) => {
    let url = `https://my-json-server.typicode.com/gold9ine/project3_shoppingmall_hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: { data } });
  };
}

export const productAction = { getProducts, getProductDetail };
