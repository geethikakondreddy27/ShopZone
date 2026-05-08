import {
  useContext,
  useState,
} from "react";

import { Link } from "react-router-dom";

import { AuthContext }
from "../context/AuthContext";

function Login() {

  const {
    isLoggedIn,
    login,
    logout,
    user,
  } = useContext(AuthContext);

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [message, setMessage] =
    useState("");

  const handleLogin = () => {

    if (
      !name ||
      !email ||
      !password
    ) {

      setMessage(
        "Please fill all fields"
      );

      return;
    }

    login(name, email);

    setMessage(
      "Login Successful ✓"
    );
  };

  const handleGuestLogin =
    () => {

      login(
        "Guest User",
        "guest@shopzone.com"
      );

      setMessage(
        "Logged in as Guest ✓"
      );
    };

  // AFTER LOGIN

  if (isLoggedIn) {

    return (

      <div className="login-page">

        <div className="login-box">

          <h1>
            Welcome Back 👋
          </h1>

          <div className="profile-box">

            <div className="profile-avatar">
              👤
            </div>

            <h2>
              {user?.name}
            </h2>

            <p>
              {user?.email}
            </p>

          </div>

          <div className="success-msg">

            Logged in Successfully ✓

          </div>

          <button
            className="login-btn"
            onClick={logout}
          >
            Logout
          </button>

        </div>

      </div>
    );
  }

  // BEFORE LOGIN

  return (

    <div className="login-page">

      <div className="login-box">

        <h1>
          Login
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(
              e.target.value
            )
          }
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
        />

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>

        <button
          className="guest-btn"
          onClick={
            handleGuestLogin
          }
        >
          Login as Guest
        </button>

        {message && (

          <p className="success-msg">

            {message}

          </p>
        )}

        <div className="login-links">

          <Link to="/forgot-password">

            <p>
              Forgot Password?
            </p>

          </Link>

          <Link to="/signup">

            <p>
              Create Account
            </p>

          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;