import "./../Styles/trending.css";
import pic1 from "./../../images/trendingimages/pic1.png";
import pic11 from "./../../images/trendingimages/pic11.png";
import pic2 from "./../../images/trendingimages/pic2.png";
import pic3 from "./../../images/trendingimages/pic3.png";
import pic4 from "./../../images/trendingimages/pic4.png";
import pic5 from "./../../images/trendingimages/pic5.png";
import pic6 from "./../../images/trendingimages/pic6.png";
import pic7 from "./../../images/trendingimages/pic7.png";
import { FaArrowRightLong } from "react-icons/fa6";
function Trending() {
  return (
    <section>
      <section className="trending-section">
        <span>Trending Now</span>
      </section>
      <section className="Total-div-container">
        <section className="trending-container">
          <div className="trending-item">
            <img src={pic1} alt="Trending Item" />
          </div>
          <section className="trending-div-details">
            <div className="trending-text1">
              <p>Pearl necklace</p>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
            <div className="trending-text2">
              <p>$1,500</p>
              <button>Add to cart</button>
            </div>
          </section>
        </section>
        <section className="trending-container">
          <div className="trending-item">
            <img src={pic11} alt="Trending Item" />
          </div>
          <section className="trending-div-details">
            <div className="trending-text1">
              <p>Gold choker</p>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
            <div className="trending-text2">
              <p>$1,800</p>
              <button>Add to cart</button>
            </div>
          </section>
        </section>
        <section className="trending-container">
          <div className="trending-item">
            <img src={pic2} alt="Trending Item" />
          </div>
          <section className="trending-div-details">
            <div className="trending-text1">
              <p>Diamond Drop</p>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
            <div className="trending-text2">
              <p>$1,850</p>
              <button>Add to cart</button>
            </div>
          </section>
        </section>
        <section className="trending-container">
          <div className="trending-item">
            <img src={pic3} alt="Trending Item" />
          </div>
          <section className="trending-div-details">
            <div className="trending-text1">
              <p>Pearl Stud</p>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
            <div className="trending-text2">
              <p>$1,250</p>
              <button>Add to cart</button>
            </div>
          </section>
        </section>
        <section className="trending-container">
          <div className="trending-item">
            <img src={pic4} alt="Trending Item" />
          </div>
          <section className="trending-div-details">
            <div className="trending-text1">
              <p>Gem Stone</p>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
            <div className="trending-text2">
              <p>$1,250</p>
              <button>Add to cart</button>
            </div>
          </section>
        </section>
        <section className="trending-container">
          <div className="trending-item">
            <img src={pic5} alt="Trending Item" />
          </div>
          <section className="trending-div-details">
            <div className="trending-text1">
              <p>Gold Bracelet Stack</p>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
            <div className="trending-text2">
              <p>$1,150</p>
              <button>Add to cart</button>
            </div>
          </section>
        </section>
        <section className="trending-container">
          <div className="trending-item">
            <img src={pic6} alt="Trending Item" />
          </div>
          <section className="trending-div-details">
            <div className="trending-text1">
              <p>2-stone Ring</p>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
            <div className="trending-text2">
              <p>$850</p>
              <button>Add to cart</button>
            </div>
          </section>
        </section>
        <section className="trending-container">
          <div className="trending-item">
            <img src={pic7} alt="Trending Item" />
          </div>
          <section className="trending-div-details">
            <div className="trending-text1">
              <p>Princess Cut</p>
              <span>
                <FaArrowRightLong />
              </span>
            </div>
            <div className="trending-text2">
              <p>$850</p>
              <button>Add to cart</button>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Trending;
