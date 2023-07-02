import React, { useState } from "react";
import { SectionsStrength } from "../SectionsStrength/SectionsStrength";
import "./FormPassword.css";

export const FormPassword = () => {
  const [password, setPassword] = useState("");

  const handlePassInput = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="input-container">
        <div className="input-group">
          <input
            placeholder="Enter your password"
            value={password}
            onChange={handlePassInput}
          />
        </div>
      </div>
      <SectionsStrength password={password} />
    </>
  );
};
