import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 200px;
`;
export const Card = styled.div`
  height: 200px;
  width: 90px;
  border-radius: 10px;
  background: #a8d0d8;
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
export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: "inherit",
  },
  root: {
    flexGrow: 1,
  },
  CarouselWrapper: {
    "& .carousel-control-prev": {
      background: "rgba(42,42,42,0.5)",
    },
    "& .carousel-control-next": {
      background: "rgba(42,42,42,0.5)",
    },
  },
  gridContainer: {
    height: "200px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  grid: {
    borderRadius: "10px",
    height: "150px",
    width: "90px",
    background: "#A8D0D8",
  },
  description: {
    padding: "3px",
    fontFamily: "'poppins', sans-serif",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    "& h1": {
      fontWeight: "bold",
      fontSize: "0.9rem",
    },
    "& h3": {
      color: "#C5283D",
      fontSize: "0.8rem",
      marginTop: "10px",
      fontWeight: "500",
    },
  },
  img: {
    width: "100%",
    borderTopRightRadius: "10px",
    borderTopLeftRadius: "10px",
  },
  title: {
    color: "white",
    fontFamily: "'poppins', sans-serif",
    fontSize: "1.2rem",
    marginTop: "70px",
    marginLeft: "12px",
    fontWeight: "bold",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
}));
