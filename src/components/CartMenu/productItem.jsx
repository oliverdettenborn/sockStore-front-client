import React from "react";
import styled from "styled-components";
import { GrFormClose } from "react-icons/gr";
import { BiPlus, BiMinus } from "react-icons/bi";
import Typography from "../../config/typography";

export default function Button({
  product,
  addQuantity,
  removeQuantity,
  removeItem,
}) {
  return (
    <Container>
      <Foto src={product.photo[0]} />
      <div>
        <Name>{product.name}</Name>
        <div>
          <Count>
            <BiMinus color="red" onClick={() => removeQuantity(product)} />
            {product.quantity}
            <BiPlus color="green" onClick={() => addQuantity(product)} />
            <Price>{parseFloat(product.price).toFixed(2)}</Price>
          </Count>
        </div>
      </div>
      <GrFormClose className="close" onClick={() => removeItem(product)} />
    </Container>
  );
}

const Container = styled.div`
  width: 85%;
  height: 85px;
  font-family: ${Typography.Poppins};
  background: #ffffff;
  border-radius: 15px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px;
  position: relative;
  overflow: scroll;

  & .close {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 24px;
  }
`;

const Name = styled.div`
  font-style: normal;
  font-weight: bold;
  width: 100%;
  overflow: hidden;
  font-size: 15px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.92);
  margin-bottom: 10px;
`;

const Foto = styled.img`
  height: 80%;
  width: 30%;
  border-radius: 5px;
`;

const Price = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #c5283d;
  margin-left: 15px;
`;

const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-right: 5%;

  svg {
    font-size: 24px;
  }
`;
