import React, { useState } from "react";
import { useAuth } from "./AuthProvider";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  

  const handleSubmit = (e) => {
    e.preventDefault();

    login({ username });
  };

  const handleChangle = (e) => {
    setUsername(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleChangle}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={handleChangle}
      />
    </form>
  );
};

export default Login;
