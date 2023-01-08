import axios from "axios";

const axiosBrowser = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

export default axiosBrowser;
