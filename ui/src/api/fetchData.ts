import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_BASE_API;

export const fetchData = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}/properties`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};