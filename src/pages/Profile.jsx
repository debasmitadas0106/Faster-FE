import "./Profile.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [authData, setAuthData] = useState({
    token: localStorage.getItem("authorization"),
    dburl: localStorage.getItem("dburl"),
    firstName: localStorage.getItem("firstName"),
  });
  const navigate = useNavigate();
  const isLoggedIn = authData.token && authData.dburl && authData.firstName;
  const userInitial = authData.firstName?.charAt(0).toUpperCase();

  useEffect(() => {
    if (!authData.token || !authData.dburl || !authData.firstName) {
      navigate("/signin");
    }
  }, [authData, navigate]);
  return (
    <div className="profile-page">
      <div className="cover-photo"></div>
      <div className="profile-dp-container"></div>
      <div className="profile-dp">
        <div className="user-initial">{userInitial}</div>
      </div>
    </div>
  );
}
export default Profile;
