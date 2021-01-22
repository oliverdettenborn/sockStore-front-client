import React, { useEffect, useState } from "react";
import axios from "axios";
// import {
//   Carousel,
//   Trending
// } from "../../components";

export default function Home() {
  const [categories, setCategories] = useState([]);

  function getCategories() {
    const request = axios.get(
      `${process.env.REACT_APP_API_URL_PROD}/clients/categories`
    );
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
      {/* <Trending categories={categories} />
      {categories.map((category) => (
        <Carousel category={category} />
      ))} */}
    </>
  );
}
