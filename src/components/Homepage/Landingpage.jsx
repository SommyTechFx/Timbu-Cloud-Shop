import Hero from "../products/Hero";
import Category from "./../products/Category.jsx";
import Trending from "./../products/Trending.jsx";
import Products from "./../products/Products.jsx";
import Reviews from "./../products/Reviews.jsx";
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
