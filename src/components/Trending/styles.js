import styled from "styled-components";
import { Link } from "react-router-dom";
import Colors from "../../config/colors";
import Typography from "../../config/typography";

export const Title = styled.h1`
  font-size: 3rem !important;
  margin: 1.5rem 0%;
  color: ${Colors.darkBlue};
  font-family: ${Typography.Poppins};
`;

export const SubTitle = styled(Title)`
  font-size: 2rem !important;
`;

export const Container = styled.div`
  display: flex;
  margin-top: 9rem;
  flex-direction: column;
  align-items: center;
  height: auto;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  h1 {
    font-weight: bold;
    font-size: 1.2rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: center;
  }
  h3 {
    font-size: 0.8rem;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: poppins, sans-serif;
  }
`;
export const CardsContainer = styled.div`
  margin-bottom: 4rem;
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  max-width: 10rem;
  background: #a8d0d8;
  margin: 0px 10px;
  text-decoration: none;
  cursor: pointer;
  img {
    width: 100%;
    height: 10rem;
    object-fit: cover;
    border-radius: 15px 15px 0px 0px;
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
