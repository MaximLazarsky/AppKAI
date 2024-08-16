import axios from "axios";

// create axios custom instance with custom config
const onDemandAPI = axios.create({
  baseURL: import.meta.env.VITE_AI_API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
    apikey: import.meta.env.VITE_API_AI_KEY,
  },
});

export default onDemandAPI;
