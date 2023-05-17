import React from "react";
import "./connect.css";
import { useNavigate } from "react-router-dom";

function Connect() {
  const navigate = useNavigate()
  return (
    <div className="Connect">
      <div className="Connect_p">
        <img
          src="https://static-exp1.licdn.com/aero-v1/sc/h/b1fxwht7hdbeusleja7ciftsj"
          alt="connect"
        />
        <h2>Connect with people who can help</h2>
        <button onClick={()=> navigate("/signup")} >Find people you know</button>
      </div>
      <div className="learn">
        <img
          src="https://static-exp1.licdn.com/aero-v1/sc/h/dkfub4sc7jgzg3o31flfr91rv"
          alt="connect"
        />
        <h2>Learn the skills you need to succeed</h2>
        <button onClick={()=> navigate("/signup")}>Find people you know</button>
      </div>
    </div>
  );
}

export default Connect;
