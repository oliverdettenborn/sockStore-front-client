import React from "react";

import { CardsContainer, Card, Description } from "./styles";

export default function CarouselItem({ products }) {
  return (
    <>
      <CardsContainer>
        {products.map((product) => (
          <Card to={`/product/${product.id}`}>
            <img src={product.photos[0].photo} alt={product.name} />
            <Description>
              <h1>{product.name}</h1>
              <h3>{`R$${product.price}`}</h3>
            </Description>
          </Card>
        ))}
      </CardsContainer>
    </>
  );
}
