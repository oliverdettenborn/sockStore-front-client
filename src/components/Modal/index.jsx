import React, { useContext } from "react";
import ReactModal from "react-modal";
import { AiFillCloseSquare } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import {
  Container,
  Title,
  DescriptionContainer,
  ItemCard,
  CloseButton,
} from "./styles";
import CartContext from "../../context/CartContext";

ReactModal.setAppElement("body");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#3833D",
    borderRadius: "20px",
    margin: "20px 50px",
    padding: "20px 50px",
  },
};
export default function Modal({ modalIsOpen, setModalIsOpen }) {
  const history = useHistory();
  return (
    <ReactModal
      isOpen={modalIsOpen}
      style={customStyles}
      contentLabel="Resume Modal"
    >
      <Container>
        <header>
          <button
            type="button"
            onClick={() => {
              setModalIsOpen(!modalIsOpen);
            }}
          >
            <AiFillCloseSquare />
          </button>
        </header>
        <Title>Seu pedido foi concluído com sucesso!</Title>
        <CloseButton onClick={() => history.push("/")}>FECHAR</CloseButton>
      </Container>
    </ReactModal>
  );
}
