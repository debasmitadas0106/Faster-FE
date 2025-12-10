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
export const getUser = async ({ token, dburl, username }) => {
  try {
    if (!token || !dburl) {
      throw new Error("Missing token or dbName in localStorage");
    }

    const response = await api.get("/userDetails", {
      headers: {
        Authorization: `Bearer ${token}`,
        dburl: dburl,
      },
      params: {
        searchKey: username,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Get user error:", error);
    throw error.response ? error.response.data : error;
  }
};
export const verify = async (token) => {
  try {
    if (!token) {
      throw new Error("Missing token");
    }

    const response = await api.post("/user/verify-email", {
      token: token,
    });

    return response.data;
  } catch (error) {
    console.error("Get user error:", error);
    throw error.response ? error.response.data : error;
  }
};
