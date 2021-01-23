/* eslint-disable no-param-reassign */
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import CartContext from "../../context/CartContext";
import Typography from "../../config/typography";

import Button from "../Button";
import ProductItem from "./productItem";

const CartMenu = (isClosed) => {
  const { cart, setCart } = useContext(CartContext);
  const history = useHistory();

  const arrayPrice = cart.map((p) => parseFloat(p.price * p.quantity));
  const totalOrder = arrayPrice.reduce((n, total) => n + total, 0);

  function removeItem(product) {
    const newCart = cart.filter((p) => p.id !== product.id);
    setCart([...newCart]);
  }

  function addQuantity(product) {
    const newQuantity = product.quantity + 1;
    product.quantity = newQuantity;
    setCart([...cart]);
  }

  function removeQuantity(product) {
    const newQuantity = product.quantity - 1;
    if (newQuantity > 0) {
      product.quantity = newQuantity;
      setCart([...cart]);
    } else {
      const newCart = cart.filter((p) => p.id !== product.id);
      setCart([...newCart]);
    }
  }

  return (
    <Aside isClosed={isClosed}>
      <ScreenBackground />
      <ChartContainer>
        <Title>Carrinho</Title>

        {cart.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addQuantity={addQuantity}
            removeQuantity={removeQuantity}
            removeItem={removeItem}
          />
        ))}

        <Total>TOTAL: {totalOrder.toFixed(2)}</Total>
        <Button
          onClick={() => history.push("/checkout")}
          width="200px"
          height="50px"
          disabled={cart.length === 0}
        >
          FECHAR PEDIDO
        </Button>
      </ChartContainer>
    </Aside>
  );
};

const ScreenBackground = styled.div`
  width: 100vw;
  height: 100vh;
  color: #fff;
  background: rgba(255, 255, 255, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999999;
`;

const ChartContainer = styled.div`
  width: 70%;
  height: 100vh;
  background: #a8d0d8;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999999999999999999999999;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h4`
  font-family: ${Typography.Poppins};
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #000000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 20px 0;
  letter-spacing: 0.6px;
`;

const Total = styled.h5`
  font-family: ${Typography.Poppins};
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #000000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 15px 0;
  letter-spacing: 0.6px;
`;

const Aside = styled.aside`
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.isClosed ? "none" : "block")};
`;

export default CartMenu;
