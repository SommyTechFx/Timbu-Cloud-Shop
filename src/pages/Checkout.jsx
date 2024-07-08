import { CgProfile } from "react-icons/cg";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlineArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import "./../components/Styles/Checkout.css";
import { BsTelephone } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
function checkout() {
  return (
    <section>
      <section className="product-direction">
        <div className="pd1">
          <h3>Home</h3>
          <MdOutlineArrowRight className="icon" />
          <p>Check out</p>
        </div>
        <div className="pd2">
          <p>Back</p>

          <Link to="/shopping-cart">
            <IoIosArrowRoundBack className="icon" />
          </Link>
        </div>
      </section>
      <section>
        <section>
          <div className="total-name-email">
            <label
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Contact Information
            </label>
            <br />
            <div className="name-email">
              <div className="name-tag">
                <CgProfile className="name-tag-img" />
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div className="name-tag">
                <BsTelephone className="name-tag-img" />
                <input type="text" placeholder="Enter your phone number" />
              </div>
            </div>
          </div>
          <div>
            <label
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Shipping Address
            </label>
            <br />
            <div className="name-tag">
              <CiLocationOn className="name-tag-img" />
              <input type="text" placeholder="Enter your house address" />
            </div>
            <div className="div-flex">
              <div className="name-tag">
                <CiLocationOn className="name-tag-img" />
                <input type="text" placeholder="Enter your house address" />
              </div>
              <div className="name-tag">
                <CiLocationOn className="name-tag-img" />
                <input type="text" placeholder="Enter your house address" />
              </div>
            </div>
            <div className="tickboxs">
              <label>
                <input type="checkbox" name="subscribe" value="newsletter" />
                Ship to another address
              </label>
              <label>
                <input type="checkbox" name="subscribe" value="newsletter" />
                Save this address
              </label>
            </div>
            <div style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
              <label>
                <input type="checkbox" name="subscribe" value="newsletter" />
                Save this address
              </label>
              <label>
                <input type="checkbox" name="subscribe" value="newsletter" />
                Save this address
              </label>
            </div>
          </div>
          <Link>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Proceed
            </button>
          </Link>
        </section>
        <section></section>
      </section>
    </section>
  );
}

export default checkout;
