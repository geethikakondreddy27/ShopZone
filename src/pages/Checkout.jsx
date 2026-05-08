import {
  useContext,
  useState,
} from "react";

import { CartContext } from "../context/CartContext";

import { useNavigate } from "react-router-dom";

function Checkout() {

  const {
    cart,
    placeOrder,
  } = useContext(CartContext);

  const navigate =
    useNavigate();

  const [
    paymentMethod,
    setPaymentMethod,
  ] = useState("COD");

  const deliveryCharge = 5;

  const subtotal = cart.reduce(
    (sum, item) =>
      sum +
      item.price *
        item.quantity,
    0
  );

  const tax =
    subtotal * 0.05;

  const finalTotal =
    subtotal +
    deliveryCharge +
    tax;

  const handlePlaceOrder =
    () => {

      placeOrder(
        paymentMethod,
        finalTotal
      );

      navigate(
        "/order-success"
      );
    };

  return (
    <div className="checkout-page">

      <div className="checkout-container">

        <h1>
          Checkout
        </h1>

        <div className="checkout-section">

          <h2>
            Order Summary
          </h2>

          {cart.map((item) => (

            <div
              key={item.id}
              className="checkout-item"
            >

              <div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  Quantity:
                  {" "}
                  {item.quantity}
                </p>

              </div>

              <h3>
                $
                {(
                  item.price *
                  item.quantity
                ).toFixed(2)}
              </h3>

            </div>
          ))}

        </div>

        <div className="checkout-section">

          <h2>
            Delivery Address
          </h2>

          <input
            type="text"
            placeholder="Full Name"
          />

          <input
            type="text"
            placeholder="Phone Number"
          />

          <textarea
            placeholder="Full Address"
          ></textarea>

          <input
            type="text"
            placeholder="Pincode"
          />

        </div>

        <div className="checkout-section">

          <h2>
            Payment Method
          </h2>

          <label>
            <input
              type="radio"
              value="COD"
              checked={
                paymentMethod ===
                "COD"
              }
              onChange={(e) =>
                setPaymentMethod(
                  e.target.value
                )
              }
            />

            Cash on Delivery
          </label>

          <label>

            <input
              type="radio"
              value="UPI"
              checked={
                paymentMethod ===
                "UPI"
              }
              onChange={(e) =>
                setPaymentMethod(
                  e.target.value
                )
              }
            />

            UPI

          </label>

          <label>

            <input
              type="radio"
              value="Card"
              checked={
                paymentMethod ===
                "Card"
              }
              onChange={(e) =>
                setPaymentMethod(
                  e.target.value
                )
              }
            />

            Credit / Debit Card

          </label>

        </div>

        <div className="bill-box">

          <div className="bill-row">

            <span>
              Subtotal
            </span>

            <span>
              $
              {subtotal.toFixed(2)}
            </span>

          </div>

          <div className="bill-row">

            <span>
              Delivery
            </span>

            <span>
              $
              {deliveryCharge}
            </span>

          </div>

          <div className="bill-row">

            <span>
              Tax
            </span>

            <span>
              $
              {tax.toFixed(2)}
            </span>

          </div>

          <div className="bill-total">

            <span>
              Final Total
            </span>

            <span>
              $
              {finalTotal.toFixed(2)}
            </span>

          </div>

        </div>

        <button
          className="place-order-btn"
          onClick={
            handlePlaceOrder
          }
        >
          Place Order
        </button>

      </div>

    </div>
  );
}

export default Checkout;