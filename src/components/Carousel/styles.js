import { makeStyles } from "@material-ui/core/styles";

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
