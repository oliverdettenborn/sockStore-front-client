import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navbar, CarouselGrid, Trending } from "../../components";

export default function Home() {
  const [categories, setCategories] = useState([]);

  function getCategories() {
    const request = axios.get("http://localhost:4000/clients/categories");
    request.then((response) => {
      console.log(response);
      const allCategories = response.data;
      setCategories(allCategories);
      console.log(allCategories);
    });
  }
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <Navbar />
      <Trending categories={categories} />
      {categories.map((category) => (
        <CarouselGrid category={category} />
      ))}
    </>
  );
}
