import React, { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage("Please enter both username and password.");
      return;
    }
    // For demo: log credentials and clear form
    console.log("Username:", username);
    console.log("Password:", password);
    setMessage(`Logged in as ${username} (demo only)`);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          {message && <p className="error">{message}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
      <footer>React + Docker multi-stage build demo</footer>
    </div>
  );
}
