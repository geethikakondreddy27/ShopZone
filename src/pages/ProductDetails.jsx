import { useParams } from "react-router-dom";

import {
  useEffect,
  useState,
  useContext,
} from "react";

import { CartContext } from "../context/CartContext";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] =
    useState(null);

  const [message, setMessage] =
    useState("");

  const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    cart,
  } = useContext(CartContext);

  const cartItem = cart.find(
    (item) =>
      item.id === Number(id)
  );

  useEffect(() => {

    fetch(
      `https://dummyjson.com/products/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });

  }, [id]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (

    <div className="details-container">

      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <div className="details-info">

        <h1>
          {product.title}
        </h1>

        <p>
          {product.description}
        </p>

        <h2>
          ${product.price}
        </h2>

        <div className="details-actions">

          <div className="details-quantity">

            <button
              onClick={() => {

                if (cartItem) {
                  decreaseQuantity(
                    product.id
                  );
                }
              }}
            >
              -
            </button>

            <span>

              {cartItem
                ? cartItem.quantity
                : 1}

            </span>

            <button
              onClick={() => {

                if (cartItem) {

                  increaseQuantity(
                    product.id
                  );

                } else {

                  addToCart(product);

                  setMessage(
                    "Item added to cart ✓"
                  );

                  setTimeout(() => {
                    setMessage("");
                  }, 2000);
                }
              }}
            >
              +
            </button>

          </div>

          <button
            className="add-cart-btn"
            onClick={() => {

              addToCart(product);

              setMessage(
                "Item added to cart ✓"
              );

              setTimeout(() => {
                setMessage("");
              }, 2000);
            }}
          >
            Add To Cart
          </button>

        </div>

        {message && (

          <p className="success-msg">
            {message}
          </p>

        )}

      </div>

    </div>
  );
}

export default ProductDetails;