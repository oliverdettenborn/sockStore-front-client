import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  overflow-x: scroll;
  ::-webkit-scrollbar {
    width: 0px;
  }
  scroll-behavior: smooth;
  .ion-icon {
    cursor: pointer;
    position: fixed;

    font-size: 10rem;
    width: 100px;
  }
`;
export const Card = styled.div`
  flex-shrink: 1;
  border-radius: 10px;
  background: #a8d0d8;
  cursor: pointer;
  img: {
    width: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
`;
export const Description = styled.div`
  padding: 3px;
  font-family: poppins, sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  h1 {
    font-weight: bold;
    font-size: 0.9rem;
  }
  h3 {
    color: #c5283d;
    font-size: 0.8rem;
    margin-top: 10px;
    font-weight: 500;
  }
`;
export const Category = styled.h1`
  color: white;
  font-family: poppins;
  text-align: left;
  font-size: 2rem;
  margin: 1% 0;
  margin-left: 2%;
`;
