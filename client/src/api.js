import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const addToCart = (product) => API.post("/cart", product);
export const getCart = () => API.get("/cart");

export default API;
