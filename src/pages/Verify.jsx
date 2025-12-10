import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Verify.css";
import { verify } from "../api";
function Verify() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const handleVerify = async () => {
    try {
      const response = await verify(code);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="verify-email-container">
      <div className="verify-email-box"></div>
      <div className="email-verify">Verify your email now</div>
      <div className="verify-email-tab">
        <label htmlFor="verification-code">Verification code : </label>
        <input
          id="code"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
      <button className="verify-now" onClick={handleVerify}>
        Verify your account now
      </button>
    </div>
  );
}
export default Verify;
