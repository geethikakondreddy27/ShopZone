import { useState } from "react";

function ForgotPassword() {

  const [email, setEmail] =
    useState("");

  const [message, setMessage] =
    useState("");

  const handleReset = () => {

    if (!email) {

      setMessage(
        "Please enter your email"
      );

      return;
    }

    setMessage(
      "Password reset link sent to your email ✓"
    );
  };

  return (

    <div className="login-page">

      <div className="login-box">

        <h1>
          Reset Password
        </h1>

        <p className="reset-text">
          Enter your registered email.
        </p>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <button
          className="login-btn"
          onClick={handleReset}
        >
          Send Reset Link
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

export default ForgotPassword;