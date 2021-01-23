/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useContext } from "react";
import { FaMoneyBill } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";
import Button from "@material-ui/core/Button";
import FormStyles from "./styles";
import buttonStyles from "./buttonStyles";
import PostOrderService from "../../services/postOrderService";
import CartContext from "../../context/CartContext";
import Modal from "../../components/Modal";
import CardForm from "./CardForm";

export default function Payment({ setPage, address, client }) {
  const { cart } = useContext(CartContext);
  const buttonClasses = buttonStyles();
  const [card, setCard] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit() {
    const response = await PostOrderService.postOrder({
      client,
      address,
      products: cart,
    });

    if (response === 422) {
      alert("Informações inválidas!");
      setPage(1);
    } else {
      setSuccess(true);
    }
  }

  return (
    <FormStyles>
      <div className="form-container">
        <h2>Pagamento</h2>
        <div className="payment-options">
          <div className="payment-option" onClick={() => setCard(false)}>
            <FaMoneyBill />
            <p>BOLETO</p>
          </div>
          <div className="payment-option" onClick={() => setCard(true)}>
            <BsCreditCard />
            <p>CARTÃO DE CRÉDITO</p>
          </div>
        </div>
        {!card ? (
          <div>
            <p className="bank-code">CÓDIGO DE BARRAS</p>
            <p className="code">5465465454654546545465454</p>
          </div>
        ) : (
          <CardForm />
        )}
        <Button
          classes={{
            root: buttonClasses.root,
          }}
          variant="contained"
          fullWidth
          type="submit"
          onClick={() => handleSubmit()}
        >
          CONCLUIR COMPRA
        </Button>
      </div>
      <Modal modalIsOpen={success} />
    </FormStyles>
  );
}
