/* eslint-disable class-methods-use-this */
import api from "../config/api";

class ProductsService {
  async getProduct(id) {
    try {
      const { data } = await api.get(`/clients/products/${id}`);
      if (data) return data;
      return null;
    } catch (e) {
      return e;
    }
  }
}

export default new ProductsService();
