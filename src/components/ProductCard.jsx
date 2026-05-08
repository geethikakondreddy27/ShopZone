import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <h2>{product.title}</h2>

      <p>${product.price}</p>

      <Link
        to={`/product/${product.id}`}
        className="view-btn"
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;