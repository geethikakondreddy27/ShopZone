import {
  createContext,
  useEffect,
  useState,
} from "react";

export const CartContext =
  createContext();

function CartProvider({
  children,
}) {

  // CART STATE
  const [cart, setCart] =
    useState(() => {
      const savedCart =
        localStorage.getItem(
          "cart"
        );

      return savedCart
        ? JSON.parse(savedCart)
        : [];
    });

  // ORDERS STATE
  const [orders, setOrders] =
    useState(() => {
      const savedOrders =
        localStorage.getItem(
          "orders"
        );

      return savedOrders
        ? JSON.parse(savedOrders)
        : [];
    });

  // ADD TO CART
  const addToCart = (
    product
  ) => {

    const existingItem =
      cart.find(
        (item) =>
          item.id === product.id
      );

    if (existingItem) {

      const updatedCart =
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        );

      setCart(updatedCart);
      

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);

    }
  };

  // INCREASE
  const increaseQuantity = (
    id
  ) => {

    const updatedCart =
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      );

    setCart(updatedCart);
  };

  // DECREASE
  const decreaseQuantity = (
    id
  ) => {

    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity - 1,
            }
          : item
      )
      .filter(
        (item) =>
          item.quantity > 0
      );

    setCart(updatedCart);
  };

  // REMOVE ITEM
  const removeItem = (id) => {

    const updatedCart =
      cart.filter(
        (item) =>
          item.id !== id
      );

    setCart(updatedCart);
  };

  // CLEAR CART
  const clearCart = () => {
    setCart([]);
  };

  // PLACE ORDER
  const placeOrder = (
    paymentMethod,
    finalTotal
  ) => {

    const newOrder = {

      id: Date.now(),

      trackingId:
        "SZ" +
        Math.floor(
          Math.random() * 100000
        ),

      items: cart,

      total: finalTotal,

      paymentMethod,

      status: "Preparing",

      orderedAt:
        new Date().toLocaleString(),
    };

    setOrders([
      newOrder,
      ...orders,
    ]);

    clearCart();
  };

  // SAVE CART
  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);

  // SAVE ORDERS
  useEffect(() => {

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

  }, [orders]);

  return (
    <CartContext.Provider
      value={{

        cart,
        orders,

        addToCart,

        increaseQuantity,
        decreaseQuantity,

        removeItem,

        clearCart,

        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;