import React, { useState } from "react";
import { Redirect } from "react-router-dom";

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
  console.log("from", from);
  console.log("location.state", location.state);
  console.log("authenticated", authenticated);
  if (authenticated) return <Redirect to={"/main"} />;

  return (
    <>
      <h1>Login</h1>
      <input
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
        type="text"
        placeholder="email"
      />
      <input
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
        type="password"
        placeholder="password"
      />
      <button onClick={handleClick}>Login</button>
    </>
  );
}

export default Login;
