import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      alert(
        error.response?.data?.message ||
        "Login Failed"
      );

    }
  };

  return (

    <div className="login-container">

      <div className="login-overlay">

        <div className="login-card">

          <div className="user-icon">
            👤
          </div>

          <form onSubmit={handleSubmit}>

            <input
              type="email"
              placeholder="Username / Email"
              className="login-input"
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <input
              type="password"
              placeholder="Password"
              className="login-input"
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <div className="login-options">

              <label>
                <input type="checkbox" />
                {" "}Remember Me
              </label>

              <span>
                Forgot Password?
              </span>

            </div>

            <button className="login-btn">
              Login
            </button>

          </form>

          <div className="signup-link">

            Don't have an account?

            <Link to="/register">
              {" "}Sign Up
            </Link>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Login;