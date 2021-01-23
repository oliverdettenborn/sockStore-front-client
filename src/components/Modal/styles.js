import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  button {
    color: #fff;
    height: 50px;
    width: 50px;
    font-size: 40px;
  }
  header {
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 26px;
  }
  @media (max-width: 600px) {
    & {
      width: 100%;
    }
  }
`;
export const Title = styled.h1`
  font-family: "Poppins";
  font-weight: bold;
  font-size: 34px;
  color: white;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 30px;
`;

export const CloseButton = styled.button`
  border-radius: 15px;
  background: #e1bc29;
  font-family: "Poppins";
  color: #000000;
  border: none;
  outline: none;
  padding: 5px 20px;
  cursor: pointer;
`;

export const ItemCard = styled.div`
  display: flex;
  border-radius: 15px;
  background: white;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    border-radius: 15px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins";
  span {
    font-weight: bold;
  }
  h1 {
    font-weight: bold;
  }
  .price {
    color: #c5283d;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
`;
