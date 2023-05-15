import axios from "axios";

const instance = axios.create({
  // baseURL: "http://13.233.228.168:8000",
  baseURL: "http://65.2.175.154:8000",
  // 65.2.175.154:8000
});

export default instance;
