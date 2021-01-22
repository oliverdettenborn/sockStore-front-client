import React from "react";
import { useHistory } from "react-router-dom";
import { CardsContainer, Card, Description } from "./styles";

export default function CarouselItem({ product, index }) {
  const history = useHistory();
  return (
    <>
      <CardsContainer>
        <Card onClick={history.push(`/:${product.id}`)}>
          <img src={product.photos[index].photo} alt={product.name} />
          <Description>
            <h1>{product.name}</h1>
            <h3>{product.price}</h3>
          </Description>
        </Card>
      </CardsContainer>
    </>
  );
}
