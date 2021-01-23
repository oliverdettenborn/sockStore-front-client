/* eslint-disable class-methods-use-this */
import api from "../config/api";

class OrderService {
  async postOrder(body) {
    try {
      const { data } = await api.post(`/clients/orders`, body);
      if (data) return data;
      return null;
    } catch (e) {
      return e.response.status;
    }
  }
}

export default new OrderService();
