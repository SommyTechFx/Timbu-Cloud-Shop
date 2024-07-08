import Hero from "../components/products/Hero.jsx";
import Category from "../components/products/Category.jsx";
import Trending from "../components/products/Trending.jsx";
import Products from "../components/products/Products.jsx";
import Reviews from "../components/products/Reviews.jsx";
function Landingpage() {
  return (
    <div>
      <Hero />
      <div id="category">
        <Category />
      </div>

      <div id="trending">
        <Trending />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="review">
        <Reviews />
      </div>
    </div>
  );
}

export default Landingpage;
