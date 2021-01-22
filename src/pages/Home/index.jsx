import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeService from "../../services/homeService";
import { Navbar, CarouselGrid, Trending } from "../../components";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [trending, setTrending] = useState([]);

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

  async function getCategoriesAndProducts() {
    const data = await HomeService.getCategoriesWithProducts();
    if (data) {
      setCategories(data);
    }

  }

  const getTrendingProducts = async () => {
    const data = await HomeService.getTrending();
    if (data) {
      setTrending(data);
    }
  };

  useEffect(() => {
    getCategoriesAndProducts();
    getTrendingProducts();
  }, []);

  return (
    <>
      <Trending trendingProducts={trending} />
      {categories.map((category) => (
        <Carousel category={category} />
      ))}
    </>
  );
}
