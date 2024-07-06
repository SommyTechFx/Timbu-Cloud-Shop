import "./../Styles/category.css";
import pic1 from "./../../images/categoryimages/pic1.png";
import pic2 from "./../../images/categoryimages/pic2.png";
import pic3 from "./../../images/categoryimages/pic3.png";
import pic4 from "./../../images/categoryimages/pic4.png";
import { FaArrowRightLong } from "react-icons/fa6";
function Category() {
  return (
    <section>
      <section className="category-section">
        <span>Category</span>
      </section>
      <section className="category-grid">
        <section className="category-div">
          <img src={pic1} alt="pic1" />
          <section className="category-details">
            <p>Earrings</p>
            <span>
              <FaArrowRightLong />
            </span>
          </section>
        </section>
        <section className="category-div">
          <img src={pic2} alt="pic1" />
          <section className="category-details">
            <p>Necklace</p>
            <span>
              <FaArrowRightLong />
            </span>
          </section>
        </section>
        <section className="category-div">
          <img src={pic3} alt="pic1" />
          <section className="category-details">
            <p>Rings</p>
            <span>
              <FaArrowRightLong />
            </span>
          </section>
        </section>
        <section className="category-div">
          <img src={pic4} alt="pic1" />
          <section className="category-details">
            <p>Bracelet</p>
            <span>
              <FaArrowRightLong />
            </span>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Category;
