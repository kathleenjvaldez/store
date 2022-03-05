import axios from "axios";

console.log(process.env.REACT_APP_API_URL);

const baseURL = process.env.REACT_APP_API_URL
  ? process.env.REACT_APP_API_URL
  : "http://localhost:3001";

const http = axios.create({
  baseURL,
});

export default http;
