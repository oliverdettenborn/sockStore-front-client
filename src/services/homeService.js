/* eslint-disable class-methods-use-this */

import api from "../config/api";

class HomeService {
  async getCategoriesWithProducts() {
    try {
      const { data } = await api.get("/clients/categories");
      if (data) {
        return data;
      }
      return null;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  async getTrending() {
    try {
      const { data } = await api.get("/clients/trendings");
      if (data) {
        return data;
      }
      return null;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}

export default new HomeService();
