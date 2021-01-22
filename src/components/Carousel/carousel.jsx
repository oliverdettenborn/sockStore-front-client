import React, { useRef } from "react";
import { Container, Category } from "./styles";
import CarouselItem from "../CarouselItem/carouselitem";

export default function CarouselGrid({ category }) {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <>
      <Category>{category.name}</Category>
      <Container>
        <ion-icon
          name="chevron-back-circle-outline"
          onClick={() => scroll(-20)}
        />
        <CarouselItem products={category.products} />
        <ion-icon
          name="chevron-forward-circle-outline"
          onClick={() => scroll(20)}
        />
      </Container>
    </>
  );
}
