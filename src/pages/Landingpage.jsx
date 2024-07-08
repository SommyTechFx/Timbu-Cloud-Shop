import Hero from "../components/products/Hero.jsx";
import Category from "../components/products/Category.jsx";
import Trending from "../components/products/Trending.jsx";
import Products from "../components/products/Products.jsx";
import Reviews from "../components/products/Reviews.jsx";
function Landingpage() {
  return (
    <div>
      <Hero />
      <Category />
      <Trending />
      <Products />
      <Reviews />
    </div>
  );
}

export default Landingpage;
