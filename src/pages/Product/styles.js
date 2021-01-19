import styled from "styled-components";
import Typography from "../../config/typography";
import Colors from "../../config/colors";

const ProductPageStyles = styled.div`
  width: 100%;
  display: flex;
  margin: 15px 0 0 0;
  font-family: ${Typography.Poppins};

  h2 {
    font-size: 20px;
    line-height: 36px;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  b {
    font-size: 14px;
    line-height: 21px;
    font-weight: bold;
  }

  .description {
    font-size: 12px;
    line-height: 18px;
    margin: 0 0 10px 0;
  }

  .container {
    width: 100%;
    background: #fff;
    padding: 25px 10px;
  }

  .carossel {
    width: 100%;
    height: 200px;
    margin: 0 0 10px 0;
    background-color: #ccc;
  }

  .size {
    margin: 0 0 15px 0;
    display: flex;
    align-items: center;
  }

  .unique {
    margin: 0 0 0 20px;
    width: 30px;
    margin: 0 0 0 10px;
    padding: 2px;
    font-size: 14px;
    line-height: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    background-color: ${Colors.yellow};
  }

  .buy {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .price {
      font-size: 22px;
      line-height: 36px;
      color: ${Colors.darkRed};
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    button {
      width: 127px;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      word-wrap: break-word;
      padding: 8px 10px;
      background: ${Colors.lightBlue};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
    }
  }
`;

export default ProductPageStyles;
