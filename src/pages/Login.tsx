import "./Login.css";
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

function Login({ authenticated, login, location }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    try {
      login({ email, password });
    } catch (e) {
      alert("Failed to login");
      setEmail("");
      setPassword("");
    }
  };

  const { from } = location.state || { from: { pathname: "/" } };
  //console.log("from", from);
  //console.log("location.state", location.state);
  //console.log("authenticated", authenticated);
  if (authenticated) return <Redirect to={"/main"} />;

  return (
    <div className="login-body__background">
      <div className="login-body__header">
        <img
          style={{ width: "50%" }}
          src="../assets/home/h-intro-img-01.png"
          alt=""
        ></img>
      </div>

      <div className="login-body__wrapper">
        <div className="login-body__main--inputs">
          <input
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            type="text"
            placeholder="이메일"
          />
          <input
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
            type="text"
            placeholder="전화번호"
          />
        </div>
        <button onClick={handleClick} className="login-body__main--login">
          로그인
        </button>
      </div>
    </div>
  );
}

export default Login;
