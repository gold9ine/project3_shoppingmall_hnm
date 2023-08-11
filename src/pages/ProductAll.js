import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, getQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    // console.log("searchQuery : ", searchQuery);
    let url = `https://my-json-server.typicode.com/gold9ine/project3_shoppingmall_hnm/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log('data : ', data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => (
            <Col lg={3} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
