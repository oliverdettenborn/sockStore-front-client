import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import CartContext from "../../context/CartContext";
import Typography from "../../config/typography";

import Button from "../Button";

const CartMenu = () => {
  const { cart } = useContext(CartContext);
  const history = useHistory();

  return (
    <Aside>
      <ScreenBackground />
      <ChartContainer>
        <Title>Carrinho</Title>
        <Total>TOTAL: R$ 450,00</Total>
        <Button
          onClick={() => history.push("/checkout")}
          width="200px"
          height="50px"
          disabled={cart.length === 0}
        />
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
  margin: 35px 0;
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
  margin: 35px 0;
  letter-spacing: 0.6px;
`;

const Aside = styled.aside`
  display: ${(props) => (props.showCar ? "none" : "dafault")};

  width: 100vw;
  height: 100vh;
`;

export default CartMenu;
