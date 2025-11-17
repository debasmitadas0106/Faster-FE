import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";
import "./SignIn.css";

function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({ username, password });
      console.log("Login successful:", response);

      if (response.status === "success") {
        const { token, userdetail, accountDetails } = response.data;

        // Store credentials in localStorage
        localStorage.setItem("authorization", token);
        localStorage.setItem("dburl", accountDetails.dbName);
        localStorage.setItem("firstName", userdetail.firstName);

        if (!userdetail.token || userdetail.token === "") {
          navigate("/dashboard");
        } else {
          navigate("/verifyuser");
        }
      } else {
        alert("Login failed, please try again.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="signIn">Sign In</h1>
        <p>Please sign in to your account</p>

        <form onSubmit={handleLogin}>
          {/* Username field */}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              placeholder="Enter your username or email"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password field */}
          <div className="form-group">
            <div className="label-row">
              <label htmlFor="password">Password</label>
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Sign In</button>
        </form>

        <p className="register-text">
          Not a user?{" "}
          <span className="register-link" onClick={() => navigate("/register")}>
            Register Now
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
