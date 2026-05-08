import {
  Link,
  NavLink,
} from "react-router-dom";

import { useContext } from "react";

import { CartContext } from "../context/CartContext";

import { AuthContext } from "../context/AuthContext";

function Navbar() {

  const { cart } =
    useContext(CartContext);

  const auth =
    useContext(AuthContext);

  const user = auth?.user;

  const logout =
    auth?.logout;

  const totalQuantity =
    cart.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );

  return (

    <nav className="navbar">

      <div className="nav-left">

        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/shop">
          Shop
        </NavLink>

        <NavLink to="/orders">
          Orders
        </NavLink>

      </div>

      <div className="nav-right">

        <NavLink to="/contact">
          Contact
        </NavLink>

        {user ? (

          <>

            <span className="user-name">

              👤
              {" "}
              {user?.name || "User"}

            </span>

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>

          </>

        ) : (

          <NavLink to="/login">
            Login
          </NavLink>

        )}

        <NavLink to="/cart">

          Cart ({totalQuantity})

        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;