import {
  useEffect,
  useState,
} from "react";

import ProductCard from "../components/ProductCard";

function Shop() {

  const [products, setProducts] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("all");

  useEffect(() => {

    fetch(
      "https://dummyjson.com/products"
    )
      .then((res) => res.json())
      .then((data) => {

        setProducts(
          data.products
        );
      });

  }, []);

  // UNIQUE CATEGORIES
  const categories = [
    "all",

    ...new Set(
      products.map(
        (product) =>
          product.category
      )
    ),
  ];

  // FILTER PRODUCTS
  const filteredProducts =
    products.filter((product) => {

      const matchesSearch =
        product.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesCategory =

        category === "all"
          ? true
          : product.category ===
            category;

      return (
        matchesSearch &&
        matchesCategory
      );
    });

  return (

    <div className="shop-page">

      <h1 className="shop-title">
        Shop Products
      </h1>

      <div className="shop-filters">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          className="search-input"
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(
              e.target.value
            )
          }
          className="category-select"
        >

          {categories.map(
            (cat) => (

              <option
                key={cat}
                value={cat}
              >
                {cat}
              </option>
            )
          )}

        </select>

      </div>

      <div className="products-grid">

        {filteredProducts.map(
          (product) => (

            <ProductCard
              key={product.id}
              product={product}
            />
          )
        )}

      </div>

    </div>
  );
}

export default Shop;