import axios from "axios";

const axiosServer = axios.create({ baseURL: process.env.API_URL });

export default axiosServer;
