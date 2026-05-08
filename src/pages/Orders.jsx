import { useContext } from "react";

import { CartContext } from "../context/CartContext";

function Orders() {

  const { orders } =
    useContext(CartContext);

  return (
    <div className="page">

      <h1>
        My Orders
      </h1>

      {orders.length === 0 ? (

        <h2>
          No previous orders
        </h2>

      ) : (

        orders.map((order) => (

          <div
            key={order.id}
            className="order-card"
          >

            <h2>
              Order ID:
              {" "}
              {order.trackingId}
            </h2>

            <p>
              Status:
              {" "}
              {order.status}
            </p>

            <p>
              Ordered At:
              {" "}
              {order.orderedAt}
            </p>

            <p>
              Payment:
              {" "}
              {order.paymentMethod}
            </p>

            <h3>
              Total:
              {" "}
              $
              {order.total.toFixed(2)}
            </h3>

            <div className="ordered-items">

              {order.items.map(
                (item) => (

                  <p key={item.id}>

                    {item.title}

                    {" "}
                    ×
                    {" "}
                    {item.quantity}

                  </p>
                )
              )}

            </div>

          </div>
        ))
      )}

    </div>
  );
}

export default Orders;