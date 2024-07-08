import { MdOutlineArrowRight } from "react-icons/md";
import "./../components/Styles/shoppingcart.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

function Shoppincart() {
  return (
    <section>
      <section className="product-direction">
        <div className="pd1">
          <h3>Home</h3>
          <MdOutlineArrowRight className="icon" />
          <p>Shopping cart</p>
        </div>
        <div className="pd2">
          <p>Back</p>

          <Link to="/product-checkout">
            <IoIosArrowRoundBack className="icon" />
          </Link>
        </div>
      </section>
      <div id="checking-out">
        <h3>Product</h3>
        <h3>Price</h3>

        <h3>Quantity</h3>
      </div>
      <hr />
    </section>
  );
}

export default Shoppincart;
