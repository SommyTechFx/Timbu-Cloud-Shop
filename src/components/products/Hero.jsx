import { Link } from "react-router-dom";
import "./../Styles/hero.css";
// import Productdetails from "../../pages/Productdetails";

function Hero() {
  return (
    <section>
      <section className="background-picture"></section>
      <section className="background-text">
        <h3>
          Elevate Your Beauty with our Timeless ,<br></br>Jewelry Collections
        </h3>
        <p>You are never fully dressed without a jewelry</p>
        <Link to="/products">
          <button>Shop Now</button>
        </Link>
      </section>
    </section>
  );
}

export default Hero;
