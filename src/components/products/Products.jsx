import { FaArrowRightLong } from "react-icons/fa6";
import "./../Styles/product.css";
import pic1 from "./../../images/productimages/pic1.png";
import pic2 from "./../../images/productimages/pic2.png";
import pic3 from "./../../images/productimages/pic3.png";
import pic4 from "./../../images/productimages/pic4.png";
import pic5 from "./../../images/productimages/pic5.png";
import pic6 from "./../../images/productimages/pic6.png";
import pic7 from "./../../images/productimages/pic7.png";
import pic8 from "./../../images/productimages/pic8.png";
function Products() {
  return (
    <section>
      <section className="product-section">
        <span>Our Products</span>
      </section>
      <section className="Total-divs-container">
        <section className="product-container">
          <div className="product-item">
            <img src={pic1} alt="product-Item" />
          </div>
          <section className="product-div-details">
            <div className="product-text1">
              <p>Pearl necklace</p>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
            <div className="product-text2">
              <p>$1,500</p>
              <button>Add to cart</button>
            </div>
          </section>
        </section>

        <section className="product-container">
          <div className="product-item">
            <img src={pic2} alt="product-Item" />
          </div>
          <section className="product-div-details">
            <div className="product-text1">
              <p>Pearl necklace</p>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
            <div className="product-text2">
              <p>$1,500</p>
              <button>Add to cart</button>
            </div>
          </section>
        </section>
        <section className="product-container">
          <div className="product-item">
            <img src={pic3} alt="product-Item" />
          </div>
          <section className="product-div-details">
            <div className="product-text1">
              <p>Pearl necklace</p>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
            <div className="product-text2">
              <p>$1,500</p>
              <button>Add to cart</button>
            </div>
          </section>
        </section>

        <section className="product-container">
          <div className="product-item">
            <img src={pic4} alt="product-Item" />
          </div>
          <section className="product-div-details">
            <div className="product-text1">
              <p>Pearl necklace</p>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
            <div className="product-text2">
              <p>$1,500</p>
              <button>Add to cart</button>
            </div>
          </section>
        </section>

        <section className="product-container">
          <div className="product-item">
            <img src={pic5} alt="product-Item" />
          </div>
          <section className="product-div-details">
            <div className="product-text1">
              <p>Pearl necklace</p>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
            <div className="product-text2">
              <p>$1,500</p>
              <button>Add to cart</button>
            </div>
          </section>
        </section>

        <section className="product-container">
          <div className="product-item">
            <img src={pic6} alt="product-Item" />
          </div>
          <section className="product-div-details">
            <div className="product-text1">
              <p>Pearl necklace</p>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
            <div className="product-text2">
              <p>$1,500</p>
              <button>Add to cart</button>
            </div>
          </section>
        </section>

        <section className="product-container">
          <div className="product-item">
            <img src={pic7} alt="product-Item" />
          </div>
          <section className="product-div-details">
            <div className="product-text1">
              <p>Pearl necklace</p>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
            <div className="product-text2">
              <p>$1,500</p>
              <button>Add to cart</button>
            </div>
          </section>
        </section>

        <section className="product-container">
          <div className="product-item">
            <img src={pic8} alt="product-Item" />
          </div>
          <section className="product-div-details">
            <div className="product-text1">
              <p>Pearl necklace</p>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
            <div className="product-text2">
              <p>$1,500</p>
              <button>Add to cart</button>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Products;
