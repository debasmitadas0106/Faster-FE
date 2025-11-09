const BASE_URL =
  "http://faster-env-1.eba-8z6psnp6.eu-north-1.elasticbeanstalk.com/api"; // ✅ Change this to your actual backend URL

// Login API
export const loginUser = async ({ username, password }) => {
  try {
    const response = await fetch(`${BASE_URL}/login/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// Register API
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Register error:", error);
    throw error;
  }
};
