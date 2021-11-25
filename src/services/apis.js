import axios from "axios";

class SuperHeroApi {
  constructor() {
    this._cors = "https://cors-anywhere.herokuapp.com/";
    this._api = "https://www.superheroapi.com/api/4311928112232423";
  }
  async searchName(keyword) {
    try {
      const response = await axios.get(
        `${this._cors}${this._api}/search/${keyword}`
      );
      if (response.data.response === "success") {
        return response.data.results;
      } else {
        return [];
      }
    } catch (err) {
      throw new Error(`Something went wrong : ${err.message}`);
    }
  }

  async searchById(id) {
    try {
      const response = await axios.get(`${this._cors}${this._api}/${id}`);
      if (response.data.response === "success") {
        return response.data;
      } else {
        return {};
      }
    } catch (error) {
      throw new Error(`Something went wrong : ${error.message}`);
    }
  }
}

export const login = async (email, password) => {
  return await axios.post("http://challenge-react.alkemy.org/", {
    email,
    password,
  });
};

export const heroApi = new SuperHeroApi();
