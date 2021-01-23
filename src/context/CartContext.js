import React, { useContext, createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = createContext();

export default CartContext;

export function CartProvider({ children }) {
  const [cart, setCart] = useLocalStorage("cart", [
    {
      id: 1,
      name: "Meia arco iris",
      quantity: 1,
      price: 10.0,
      photo: [
        "https://cea.vteximg.com.br/arquivos/ids/14965329-468-560/Meia-Masculina-Cano-Alto-Divertida-Estampada-de-Et-Preta-9787860-Preto_1.jpg?v=637310621733200000",
      ],
    },
    {
      id: 2,
      name: "Meia arco iris",
      quantity: 1,
      price: 10.0,
      photo: [
        "https://cea.vteximg.com.br/arquivos/ids/14965329-468-560/Meia-Masculina-Cano-Alto-Divertida-Estampada-de-Et-Preta-9787860-Preto_1.jpg?v=637310621733200000",
      ],
    },
    {
      id: 3,
      name: "Meia arco iris",
      quantity: 1,
      price: 10.0,
      photo: [
        "https://cea.vteximg.com.br/arquivos/ids/14965329-468-560/Meia-Masculina-Cano-Alto-Divertida-Estampada-de-Et-Preta-9787860-Preto_1.jpg?v=637310621733200000",
      ],
    },
  ]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return context;
}
