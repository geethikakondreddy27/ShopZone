import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="success-page">

      <div className="success-box">

        <h1>
          Checkout Successful 🎉
        </h1>

        <p>
          Your order has been placed successfully.
        </p>

        <p>
          Estimated Delivery:
          3-5 days
        </p>

        <Link to="/tracking">
          <button className="track-btn">
            Track Package
          </button>
        </Link>

      </div>

    </div>
  );
}

export default OrderSuccess;