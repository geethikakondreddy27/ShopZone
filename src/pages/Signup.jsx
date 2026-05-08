import {
  useState,
  useContext,
} from "react";

import { AuthContext } from "../context/AuthContext";

import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate =
    useNavigate();

  const { login } =
    useContext(AuthContext);

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [message, setMessage] =
    useState("");

  const handleSignup = () => {

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

    login(name , email);

    setMessage(
      "Account Created Successfully ✓"
    );

    setTimeout(() => {

      navigate("/login");

    }, 1500);
  };

  return (

    <div className="login-page">

      <div className="login-box">

        <h1>
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="login-btn"
          onClick={handleSignup}
        >
          Create Account
        </button>

        {message && (

          <p className="success-msg">

            {message}

          </p>
        )}

      </div>

    </div>
  );
}

export default Signup;