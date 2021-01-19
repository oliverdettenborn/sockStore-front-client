import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductPageStyles from "./styles";
import ProductsService from "../../services/productsService";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const response = ProductsService.getProduct(id);
    setProduct(response);
  }, []);
  return (
    <ProductPageStyles>
      {product ? (
        <div className="container">
          <h2>{product.name}</h2>
          <div className="carossel" />
          <b>Descrição do produto</b>
          <p className="description">{product.description}</p>
          <div className="size">
            <b>Tamanho</b>
            <button type="button" className="unique">
              {product.size}
            </button>
          </div>
          <div className="buy">
            <div className="priceContainer">
              <b>Preço</b>
              <p className="price">{product.price}</p>
            </div>
            <button type="button">Adicionar ao carrinho</button>
          </div>
        </div>
      ) : (
        <h1>Deu ruim</h1>
      )}
    </ProductPageStyles>
  );
}
