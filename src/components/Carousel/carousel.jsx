import React from "react";
import Carousel from "react-bootstrap/Carousel";
import useStyles from "./styles";

const CarouselGrid = ({ products }) => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <div className={classes.CarouselWrapper}>
        <h1 className={classes.title}>Cano longo</h1>
        <Carousel indicators={false} interval={null}>
          <Carousel.Item interval={null}>
            <div className={classes.gridContainer}>
              <div className={classes.grid}>
                <img
                  src="./images/meia1.jpg"
                  alt="meia 1"
                  className={classes.img}
                />
                <div className={classes.description}>
                  <h1>Meia Simpsons</h1>
                  <h3>R$ 150,00</h3>
                </div>
              </div>
              <div className={classes.grid}>
                <img
                  src="./images/meia1.jpg"
                  alt="meia 1"
                  className={classes.img}
                />
                <div className={classes.description}>
                  <h1>Meia Simpsons</h1>
                </div>
              </div>
              <div className={classes.grid}>
                <img
                  src="./images/meia1.jpg"
                  alt="meia 1"
                  className={classes.img}
                />
                <div className={classes.description}>
                  <h1>Meia Simpsons</h1>
                </div>
              </div>
              <div className={classes.grid}>
                <img
                  src="./images/meia1.jpg"
                  alt="meia 1"
                  className={classes.img}
                />
                <div className={classes.description}>
                  <h1>Meia Simpsons</h1>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={null}>
            <div className={classes.gridContainer}>
              <div className={classes.grid}>
                <img
                  src="./images/meia1.jpg"
                  alt="meia 1"
                  className={classes.img}
                />
                <div className={classes.description}>
                  <h1>Meia Simpsons</h1>
                  <h3>R$ 150,00</h3>
                </div>
              </div>
              <div className={classes.grid}>
                <img
                  src="./images/meia1.jpg"
                  alt="meia 1"
                  className={classes.img}
                />
                <div className={classes.description}>
                  <h1>Meia Simpsons</h1>
                </div>
              </div>
              <div className={classes.grid}>
                <img
                  src="./images/meia1.jpg"
                  alt="meia 1"
                  className={classes.img}
                />
                <div className={classes.description}>
                  <h1>Meia Simpsons</h1>
                </div>
              </div>
              <div className={classes.grid}>
                <img
                  src="./images/meia1.jpg"
                  alt="meia 1"
                  className={classes.img}
                />
                <div className={classes.description}>
                  <h1>Meia Simpsons</h1>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </main>
  );
};

export default CarouselGrid;
