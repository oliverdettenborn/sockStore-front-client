import React from "react";

import { Container, Category } from "./styles";
import CarouselItem from "../CarouselItem";

export default function CarouselGrid({ category }) {
  return (
    <>
      <Category>{category.name}</Category>
      <Container>
        <CarouselItem products={category.products} />
      </Container>
    </>
  );
}
