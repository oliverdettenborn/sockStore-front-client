import styled from "styled-components";
import Typography from "../../config/typography";

const FormPageStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: ${Typography.Poppins};

  .back {
    width: 100%;
    padding: 0 20px;
    margin: 20px 0;
    color: white;

    svg {
      margin: 0 5px 0 0;
    }

    span {
      display: flex;
      align-items: center;
    }
  }
`;

export default FormPageStyles;
