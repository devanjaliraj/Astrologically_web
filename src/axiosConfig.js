import axios from "axios";

const instance = axios.create({
  baseURL: "http://13.235.180.192:8000",
});

export default instance;
