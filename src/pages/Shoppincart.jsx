import { MdOutlineArrowRight } from "react-icons/md";
import "./../components/Styles/shoppingcart.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { CiTrash } from "react-icons/ci";
import pic6 from "./../images/productimages/pic6.png";

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
      <section id="product-price-quantity">
        <div>
          <div id="checking-out">
            <h3>Product</h3>
            <h3>Price</h3>

            <h3>Quantity</h3>
          </div>
          <hr id="underline1" />
          <section id="add-to-cart">
            <div id="add-to-cart-img">
              <img src={pic6} alt="" />
              <p>Diamond cut Ring</p>
            </div>
            <p>$2,500</p>
            <div id="add-cart-calculations">
              <button>-&nbsp; 1&nbsp; +</button>
              <CiTrash
                style={{
                  color: "rgba(243, 89, 89, 1)",
                  fontSize: "2rem",
                  alignItems: "center",
                }}
              />
            </div>
          </section>
        </div>

        <section id="price-list">
          <div id="each-price">
            <h3>Subtotal</h3>
            <p>$2,500.00</p>
          </div>
          <div id="each-price">
            <h3>Delivery Fee</h3>
            <p>$10.00</p>
          </div>
          <div id="each-price">
            <h3>Promo Offer</h3>
            <p>$0.00</p>
          </div>
          <div id="each-price">
            <h3>Grand Total</h3>
            <p>$2,505.00</p>
          </div>
          <hr id="underline2" />
          <div id="each-price">
            <h3>Subtotal</h3>
            <p>$2,500.00</p>
          </div>
          <Link to="/form-details">
            <button>Proceed to Checkout</button>
          </Link>
        </section>
      </section>
    </section>
  );
}

export default Shoppincart;
