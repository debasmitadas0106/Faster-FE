// api.js
import axios from "axios";

const BASE_URL = "https://fasterfrontend.fun/api"; // backend URL

// Create Axios instance
export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
export const loginUser = async ({ username, password }) => {
  try {
    const response = await api.post("/login/user", { username, password });
    return response.data; // axios handles JSON parsing automatically
  } catch (error) {
    console.error("Login error:", error);
    throw error.response ? error.response.data : error;
  }
};
export const registerUser = async (userData) => {
  try {
    const response = await api.post("/user", userData);
    return response.data;
  } catch (error) {
    console.error("Register error:", error);
    throw error.response ? error.response.data : error;
  }
};
export const getUser = async () => {
  try {
    const token = localStorage.getItem("authToken");
    const dbName = localStorage.getItem("dburl");

    if (!token || !dbName) {
      throw new Error("Missing token or dbName in localStorage");
    }

    const response = await api.get("/user", {
      headers: {
        Authorization: `Bearer ${token}`,
        "X-DB-Name": dbName, // custom header
      },
    });

    return response.data;
  } catch (error) {
    console.error("Get user error:", error);
    throw error.response ? error.response.data : error;
  }
};
