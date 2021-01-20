import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navbar, CarouselGrid } from "../../components";

export default function Home() {
  const [products, setProducts] = useState([]);

  function getProducts() {
    const request = axios.get("http://localhost:4000/clients/products");
    request.then((response) => {
      const allProducts = response.data;
      setProducts(allProducts);
      console.log(products);
    });
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <Navbar />
      <CarouselGrid products={products} />
    </>
  );
}
