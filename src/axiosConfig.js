import axios from "axios";

const instance = axios.create({
  baseURL: "http://13.233.228.168:8000",
});

export default instance;
