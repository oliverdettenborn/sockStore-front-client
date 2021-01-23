import React, { useContext } from "react";
import ReactModal from "react-modal";
import { AiFillCloseSquare } from "react-icons/ai";
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
  const { cart, setCart } = useContext(CartContext);
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
        {cart.map((item) => (
          <ItemCard>
            <img src="" alt="" />
            <DescriptionContainer>
              {item.name}
              <span>(U)</span>
              <div>
                <h1>Qtd: {item.quantity}</h1>
                <h1 className="price">R${item.price}</h1>
              </div>
            </DescriptionContainer>
          </ItemCard>
        ))}
        <Title>TOTAL: R${cart.totalPrice}</Title>
        <CloseButton>FECHAR</CloseButton>
      </Container>
    </ReactModal>
  );
}
