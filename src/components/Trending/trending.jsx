import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Card, CardsContainer, Description } from "./styles";

export default function Trending({ products, index }) {
  const history = useHistory();
  return (
    <>
      <Container>
        <CardsContainer>
          <Card onClick={history.push(`/:${products.id}`)}>
            <img src={products.photos[index].photo} alt={products.name} />
            <Description>
              <h1>{products.name}</h1>
              <h3>R${products.price}</h3>
            </Description>
          </Card>
        </CardsContainer>
      </Container>
    </>
  );
}
