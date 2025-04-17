import { useState } from "react";

const SignupLogout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle Signup
  const handleSignup = (e) => {
    e.preventDefault();
    if (username && email && password) {
      alert("Signup Successful! You are now logged in.");
      setIsLoggedIn(true);
    } else {
      alert("Please fill all fields!");
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setEmail("");
    setPassword("");
    alert("You have been logged out!");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {!isLoggedIn ? (
        // Signup Form
        <div>
          <h2>Signup Page</h2>
          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <button type="submit">Signup</button>
          </form>
        </div>
      ) : (
        // Logout Section
        <div>
          <h2>Logout Page</h2>
          <p>Welcome, {username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default SignupLogout;
