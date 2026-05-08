import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="home-page">

      {/* HERO SECTION */}

      <section className="hero-section">

        <div className="hero-content">

          <h1>
            Welcome to ShopZone 🛒
          </h1>

          <p>
            Discover beauty,
            fashion, fragrances,
            and lifestyle products
            in one modern shopping
            experience.
          </p>

          <div className="hero-buttons">

            <Link to="/shop">

              <button className="shop-btn">

                Start Shopping

              </button>

            </Link>

            <Link to="/orders">

              <button className="secondary-btn">

                View Orders

              </button>

            </Link>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
            alt="Shopping"
          />

        </div>

      </section>


      {/* FEATURES */}

      <section className="features-section">

        <div className="feature-card">

          <h2>🚚</h2>

          <h3>
            Fast Delivery
          </h3>

          <p>
            Quick doorstep delivery
            with live tracking.
          </p>

        </div>

        <div className="feature-card">

          <h2>💳</h2>

          <h3>
            Secure Payments
          </h3>

          <p>
            Safe checkout with
            multiple payment options.
          </p>

        </div>

        <div className="feature-card">

          <h2>🎁</h2>

          <h3>
            Trending Products
          </h3>

          <p>
            Explore popular beauty,
            fashion and lifestyle picks.
          </p>

        </div>

      </section>


      {/* OFFER BANNER */}

      <section className="offer-banner">

        <h2>
          🔥 Summer Sale is Live
        </h2>

        <p>
          Up to 50% OFF on selected products.
        </p>

      </section>


      {/* WHY SHOP */}

      <section className="why-shop">

        <h1>
          Why Shop With Us?
        </h1>

        <div className="why-grid">

          <div className="why-card">

            <h3>
              Trusted Platform
            </h3>

            <p>
              Thousands of happy customers
              shop with confidence.
            </p>

          </div>

          <div className="why-card">

            <h3>
              Easy Returns
            </h3>

            <p>
              Hassle-free return process
              for damaged products.
            </p>

          </div>

          <div className="why-card">

            <h3>
              24/7 Support
            </h3>

            <p>
              Dedicated customer support
              whenever you need help.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;