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
      };
      return data;
    } catch (e) {
      return e.response.data;
    }
  }
}

export default new ProductsService();
