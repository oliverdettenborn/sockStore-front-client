/* eslint-disable class-methods-use-this */
import api from "../config/api";

class ProductsService {
  async getProduct(token) {
    try {
      const { data } = await api.get(`users/log-out`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (data) {
        return data;
      }
      return null;
    } catch (e) {
      return e.response.data;
    }
  }
}

export default new ProductsService();
