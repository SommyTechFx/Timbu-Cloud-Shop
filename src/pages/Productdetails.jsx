import { MdOutlineArrowRight } from "react-icons/md";
import "./../components/Styles/productdetails.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import pic6 from "./../images/productimages/pic6.png";
import pic62 from "./../images/trendingimages/pic62.png";
import pic7 from "./../images/trendingimages/pic7.png";
import stars from "./../images/reviewimages/stars.png";
import starx from "./../images/reviewimages/starx.png";
import { CiHeart } from "react-icons/ci";
import Description from "./../components/products/Description";
import CustomerReview from "./../components/products/CustomerReview";
import Warranty from "./../components/products/Warranty";
import { useState } from "react";
import { Link } from "react-router-dom";

function Productdetails() {
  const [selectedComponent, setSelectedComponent] = useState("Component1");

  const renderDetails = () => {
    switch (selectedComponent) {
      case "Component1":
        return <Description />;
      case "Component2":
        return <CustomerReview />;
      case "Component3":
        return <Warranty />;
    }
  };
  return (
    <>
      <section className="product-direction">
        <div className="pd1">
          <h3>Home</h3>
          <MdOutlineArrowRight className="icon" />
          <p>Product detail</p>
        </div>
        <div className="pd2">
          <p>Continue shopping</p>
          <Link to="/products">
            <IoIosArrowRoundBack className="icon" />
          </Link>
        </div>
      </section>
      <section className="checkout-div-layout">
        <div className="grid-pics">
          <img src={pic6} alt="" />
          <img src={pic7} alt="" />

          <img src={pic62} alt="" />
        </div>
        <div className="main-product">
          <img src={pic6} alt="" />
        </div>
        <section className="details-alignment">
          <div className="product-price-details">
            <p>Diamond cut Ring</p>
            <div className="star-icons">
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={stars} alt="" />
              <img src={starx} alt="" />
            </div>
            <p>$2,500</p>
            <div>
              <button className="rounded-btn">-</button>
              <button className="rounded-btn2">1</button>
              <button className="rounded-btn">+</button>
            </div>

            <div className="pd4">
              <h3>Category</h3>
              <MdOutlineArrowRight className="icon" />
              <h6>Rings</h6>
            </div>
            <div className="pd5">
              <h3>Size</h3>

              <h6>S</h6>
              <div>
                <span>M</span>
              </div>

              <h6>L</h6>
            </div>
            <div className="Add-icon">
              <Link to="/shopping-cart">
                <button
                  style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
                >
                  Add to cart
                </button>
              </Link>

              <CiHeart className="heart-icon" />
            </div>
          </div>
        </section>
      </section>
      <section className="decription-review-warranty">
        <button onClick={() => setSelectedComponent("Component1")}>
          Description
        </button>
        <button onClick={() => setSelectedComponent("Component2")}>
          Customer Review
        </button>
        <button onClick={() => setSelectedComponent("Component3")}>
          Warranty
        </button>
      </section>
      <div style={{ paddingLeft: "1rem", marginTop: "3rem" }}>
        {renderDetails()}
      </div>
    </>
  );
}

export default Productdetails;
