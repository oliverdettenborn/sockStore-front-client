/* eslint-disable class-methods-use-this */

class ProductsService {
  getProduct(id) {
    try {
      const data = {
        id,
        name: "Meia Simpsons",
        description: `Seu par perfeito está aqui: meias estampadas, criativas e divertidas, com design que te representa. Vai dar match!`,
        price: "R$ 49,90",
        size: "U",
        images: [
          "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
          "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
          "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        ],
      };
      return data;
    } catch (e) {
      return e.response.data;
    }
  }
}

export default new ProductsService();
