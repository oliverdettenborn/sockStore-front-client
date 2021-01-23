import React from "react";

import {
  Container,
  Card,
  CardsContainer,
  Description,
  Title,
  SubTitle,
} from "./styles";

export default function Trending({ trendingProducts }) {
  return (
    <>
      <Container>
        <Title>Produtos em destaques</Title>
        <SubTitle>Confira as meias mais vendidas</SubTitle>
        <CardsContainer>
          {trendingProducts.map((product) => (
            <Card to={`/${product.id}`}>
              <img src={product.photos[0].photo} alt={product.name} />
              <Description>
                <h1>{product.name}</h1>
                <h3>R${product.price}</h3>
              </Description>
            </Card>
          ))}
        </CardsContainer>
      </Container>
    </>
  );
}
