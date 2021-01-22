import React, { useRef } from "react";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Container, Category } from "./styles";
// import Colors from "../../config/colors";
import CarouselItem from "../CarouselItem/carouselitem";

export default function CarouselGrid({ category }) {
  // const itemRef = useRef();

  // const scrollRight = () => {
  //   console.log(itemRef.current.scrollIntoView({ behavior: "smooth" }));
  //   itemRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  // const scrollLeft = () => {
  //   itemRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <>
      <Category>{category.name}</Category>
      <Container>
        {/* <IoIosArrowBack
          color={Colors.darkBlue}
          fontSize="4rem"
          name="chevron-back-circle-outline"
          onClick={scrollLeft}
        /> */}
        <CarouselItem products={category.products} />
        {/* <IoIosArrowForward
          color={Colors.darkBlue}
          fontSize="4rem"
          name="chevron-forward-circle-outline"
          onClick={scrollRight}
        /> */}
      </Container>
    </>
  );
}
