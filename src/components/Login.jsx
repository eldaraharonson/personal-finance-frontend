import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login-container" style={styles.container}>
      <h2>Login</h2>
      <form action="/login" method="post" style={styles.form}>
        <div className="form-group" style={styles.inputGroup}>
          <label for="username" style={styles.label}>
            Username
          </label>
          <input
            style={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
            name="username"
            required
          />
        </div>
        <div className="form-group" style={styles.inputGroup}>
          <label for="password" style={styles.label}>
            Password
          </label>
          <input
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            id="password"
            name="password"
            required
          />
        </div>
        <button
          className="login-button"
          type="submit"
          style={styles.submitButton}
        >
          Login
        </button>
        <div className="form-link" style={styles.formLink}>
          <span>
            Don't have an account? <a href="/signup">Sign Up</a>
          </span>
        </div>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  formLink: {
    textAlign: "center",
    marginTop: "8px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "97%",
    padding: "8px",
    paddingRight: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  submitButton: {
    padding: "10px 20px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
  signupButton: {
    marginTop: "10px",
    padding: "10px 20px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#28a745",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
