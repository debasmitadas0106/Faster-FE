import { useState } from "react";
import { registerUser } from "../api";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
    userAddress: {
      flatNo: "",
      street: "",
      pincode: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("userAddress.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        userAddress: { ...prev.userAddress, [field]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        userAddress: [formData.userAddress], // ✅ backend expects array
      };
      const response = await registerUser(payload);
      console.log("Registration successful:", response);
      alert("Registration successful!");
      navigate("/signin");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="register-wrapper">
      {/* Left Section */}
      <div className="register-left">
        <img
          src="faster.jpg" // ✅ replace with your actual image path
          alt="Faster illustration"
        />
        <div className="overlay-text">
          <h2>Welcome to Faster 🚀</h2>
          <p>
            We build fast, reliable, and scalable solutions that help your
            business take off!
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="register-right">
        <div className="register-form-container">
          <h1 className="register-title">Create an Account</h1>
          <p>Join Faster today</p>

          <form onSubmit={handleSubmit}>
            {/* Basic Info */}
            <label>Username:</label>
            <input
              type="text"
              name="userName"
              placeholder="Enter username"
              value={formData.userName}
              onChange={handleChange}
              required
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
              required
            />

            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
              required
            />

            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter first name"
              value={formData.firstName}
              onChange={handleChange}
            />

            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter last name"
              value={formData.lastName}
              onChange={handleChange}
            />

            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter phone number"
              value={formData.phone}
              onChange={handleChange}
            />

            {/* Address Section */}
            <h3>Address</h3>
            <label>Flat / House No:</label>
            <input
              type="text"
              name="userAddress.flatNo"
              placeholder="Flat or House No"
              value={formData.userAddress.flatNo}
              onChange={handleChange}
            />

            <label>Street:</label>
            <input
              type="text"
              name="userAddress.street"
              placeholder="Street Name"
              value={formData.userAddress.street}
              onChange={handleChange}
            />

            <label>Pincode:</label>
            <input
              type="text"
              name="userAddress.pincode"
              placeholder="Enter Pincode"
              value={formData.userAddress.pincode}
              onChange={handleChange}
            />

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
