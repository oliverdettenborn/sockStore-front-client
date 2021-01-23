/* eslint-disable react/destructuring-assignment */
import React from "react";
import styled from "styled-components";
import Typography from "../../config/typography";

export default function Button(props) {
  return (
    <StyledButton
      onClick={props.onClick}
      type={props.type}
      width={props.width}
      height={props.height}
      disabled={props.disabledButton}
    >
      {props.disabledButton ? "..." : props.children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => (props.disabled ? "gray" : "#E1BC29")};
  border: none;
  font-family: ${Typography.Poppins};
  font-size: 22px;
  line-height: 28px;
  font-weight: bold;
  color: #000000;
  margin-top: 10px;
  text-align: center;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
