import axios from "axios";

export const dueMarketApi = axios.create({
  baseURL: "https://duemarket.herokuapp.com/",
});

export const viaCepApi = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});
