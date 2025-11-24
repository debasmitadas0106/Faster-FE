import "./Profile.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUser } from "../api";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [authData, setAuthData] = useState({
    token: localStorage.getItem("authorization"),
    dburl: localStorage.getItem("dburl"),
    firstName: localStorage.getItem("firstName"),
    username: localStorage.getItem("username"),
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!authData.token || !authData.dburl || !authData.firstName) {
      navigate("/signin");
    }
  }, [authData, navigate]);

  // Fetch user details
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUser({
          token: authData.token,
          dburl: authData.dburl,
          username: authData.username,
        });

        if (response.status === "success") {
          setUserDetails(response.data);
          console.log("User details:", response.data);
        }
      } catch (error) {
        console.error("Failed to fetch user details:", error);
      }
    };
    fetchUser();
  }, [authData]);

  const isLoggedIn = authData.token && authData.dburl && authData.firstName;
  const userInitial = authData.firstName?.charAt(0).toUpperCase();

  return (
    <div className="profile-page">
      <div className="cover-photo"></div>
      <div className="profile-dp-container"></div>
      <div className="profile-dp">
        <div className="user-profile-update-button">
          <img src="edit.png" />
        </div>
        <div className="user-initial">{userInitial}</div>
      </div>
      <div className="user-name">
        {userDetails?.firstName} {userDetails?.lastName}
      </div>
      <div className="user-info">
        <div className="user-email">Email : {userDetails?.email}</div>

        <div className="user-address-section">
          <div className="user-address">Address :</div>
          <div>Flat: {userDetails?.userAddress[0]?.flatNo}</div>
          <div>Street: {userDetails?.userAddress[0]?.street}</div>
          <div>City: {userDetails?.userAddress[0]?.city || "Bengaluru"}</div>
          <div>Pincode: {userDetails?.userAddress[0]?.pincode}</div>
          <div>Phone: {userDetails?.phone}</div>
          <div>Active: {String(userDetails?.active)}</div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
