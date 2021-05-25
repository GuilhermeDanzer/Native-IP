import axios from "axios";
const instance = axios.create({
  baseURL: "https://ea3d7a275da3.ngrok.io/",
});

export default instance;
