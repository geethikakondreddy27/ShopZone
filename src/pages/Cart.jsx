import { useContext } from "react";

import { CartContext } from "../context/CartContext";

import { Link } from "react-router-dom";

function Cart() {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => {
      return (
        sum +
        item.price * item.quantity
      );
    },
    0
  );

  if (cart.length === 0) {

    return (

      <div className="empty-cart">

        <h1>
          Your Cart is Empty 🛒
        </h1>

        <p>
          Looks like you haven’t
          added anything yet.
        </p>

        <Link
          to="/shop"
          className="shop-btn"
        >
          Continue Shopping
        </Link>

      </div>
    );
  }

  return (

    <div className="page">

      <h1>
        Shopping Cart
      </h1>

      {cart.map((item) => (

        <div
          key={item.id}
          className="cart-item"
        >

          <h2>
            {item.title}
          </h2>

          <p>
            Price: ${item.price}
          </p>

          <p>
            Quantity:
            {" "}
            {item.quantity}
          </p>

          <div className="quantity-controls">

            <div className="quantity-box">

              <button
                onClick={() =>
                  increaseQuantity(
                    item.id
                  )
                }
              >
                +
              </button>

              <div className="quantity-number">
                {item.quantity}
              </div>

              <button
                onClick={() =>
                  decreaseQuantity(
                    item.id
                  )
                }
              >
                -
              </button>

            </div>

            <button
              className="delete-btn"
              onClick={() =>
                removeItem(item.id)
              }
            >
              Remove
            </button>

          </div>

        </div>
      ))}

      <div className="total-box">

        Total:
        {" "}
        ${total.toFixed(2)}

      </div>

      <Link
        to="/checkout"
        className="checkout-btn"
      >
        Proceed to Checkout
      </Link>

    </div>
  );
}

export default Cart;