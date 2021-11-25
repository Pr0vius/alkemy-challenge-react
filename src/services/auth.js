import { login } from "./apis";

class Auth {
  constructor() {
    this.authentication = false;
    this.token = undefined;
    this.checkAuthentification();
  }
  async login(email, password) {
    try {
      const res = await login(email, password);
      localStorage.setItem("AlkemyToken", res.data.token);
      this.authentication = true;
      this.token = localStorage.getItem("AlkemyToken");
    } catch (error) {
      alert(error.response.data.error);
    }
  }
  logout() {
    this.authentication = false;
    this.token = localStorage.removeItem("AlkemyToken");
  }
  checkAuthentification() {
    const token = localStorage.getItem("AlkemyToken");
    if (token) {
      this.authentication = true;
      this.token = token;
    }
  }
  isAuthenticated() {
    return this.authentication;
  }
}

export default new Auth();
