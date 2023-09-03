import React, { useEffect, useState } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  // const productList = useSelector((state) => state.productList);
  // const products = useSelector((state) => state.products);
  const products = useSelector((state) => state.product.products);
  const [query, getQuery] = useSearchParams();
  const dispatch = useDispatch();
  // const [products, setProducts] = useState([]);
  let [error, setError] = useState("");

  const getProducts = () => {
    let keyword = query.get("q") || "";
    // console.log("keyword : ", keyword);
    dispatch(productAction.getProducts(keyword));
    // try {
    //   // console.log('data : ', data);
    //   if (data.length < 1) {
    //     if (keyword !== "") {
    //       setError(`${keyword}와 일치하는 상품이 없습니다`);
    //     } else {
    //       throw new Error("결과가 없습니다");
    //     }
    //   }
    //   setProducts(data);
    // } catch (err) {
    //   setError(err.message);
    // }
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <Container>
      {error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (
        <Row>
          {products.length > 0 &&
            products.map((item) => (
              <Col md={3} sm={12} key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
        </Row>
      )}
    </Container>
  );
};

export default ProductAll;
