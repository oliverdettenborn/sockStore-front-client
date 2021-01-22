import styled from "styled-components";
import Typography from "../../config/typography";
import Colors from "../../config/colors";

const FormStyles = styled.div`
  width: 100%;
  font-family: ${Typography.Poppins};
  .form-container {
    background-color: ${Colors.purple};
    padding: 30px 20px;
  }

  h2 {
    font-size: 26px;
    line-height: 32px;
    text-align: center;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0 0 15px 0;
  }
  .container {
    display: flex;
    justify-content: space-between;
  }
  #cep,
  #street,
  #number,
  #complement,
  #city,
  #state,
  #neighborhood,
  #name,
  #email,
  #cpf,
  #number,
  #expiration,
  #security {
    padding: 20px 6px 12px 10px;
    font-size: 14px;
    line-height: 20px;
  }

  .payment-options {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 0 0 10px 0;
  }

  .payment-option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 46%;
    background-color: #fff;
    border-radius: 15px;
    padding: 20px 15px;
    svg {
      font-size: 40px;
    }
    p {
      text-align: center;
    }
  }

  .bank-code {
    font-size: 22px;
    line-height: 30px;
    text-align: center;
    color: #ffffff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 20px 0 0 0;
  }

  .code {
    text-align: center;
    color: black;
    background-color: white;
    padding: 15px 5px;
    border-radius: 15px;
  }
`;

export default FormStyles;
