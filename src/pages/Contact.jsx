import { useState } from "react";

function Contact() {

  const [message, setMessage] =
    useState("");

  const handleSubmit = (
    e
  ) => {

    e.preventDefault();

    setMessage(
      "Support request submitted successfully ✓"
    );
  };

  return (

    <div className="contact-page">

      <div className="contact-container">

        <h1>
          Customer Support
        </h1>

        <p className="contact-subtitle">

          Need help with your order,
          refund, delivery, or account?

        </p>

        <form
          onSubmit={handleSubmit}
          className="contact-form"
        >

          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="text"
            placeholder="Order ID"
          />

          <select required>

            <option value="">
              Select Issue
            </option>

            <option>
              Order Tracking
            </option>

            <option>
              Refund Request
            </option>

            <option>
              Payment Issue
            </option>

            <option>
              Account Problem
            </option>

            <option>
              Product Inquiry
            </option>

          </select>

          <textarea
            placeholder="Describe your issue..."
            rows="6"
            required
          ></textarea>

          <button
            type="submit"
            className="contact-btn"
          >
            Submit Request
          </button>

        </form>

        {message && (

          <p className="success-msg">

            {message}

          </p>
        )}

      </div>

      <div className="support-info">

        <div className="support-card">

          <h2>
            📞 Call Support
          </h2>

          <p>
            +91 **********
          </p>

        </div>

        <div className="support-card">

          <h2>
            📧 Email Support
          </h2>

          <p>
            support@shopzone.com
          </p>

        </div>

        <div className="support-card">

          <h2>
            🕒 Support Hours
          </h2>

          <p>
            Mon - Sat
            <br />
            9 AM - 8 PM
          </p>

        </div>

      </div>

    </div>
  );
}

export default Contact;