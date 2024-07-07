import "./../Styles/reviews.css";
import star from "./../../images/reviewimages/star.png";
import stars from "./../../images/reviewimages/stars.png";
import pic1 from "./../../images/reviewimages/pic1.png";
import pic2 from "./../../images/reviewimages/pic2.png";
import pic3 from "./../../images/reviewimages/pic3.png";
function reviews() {
  return (
    <section>
      <section className="review-section">
        <span>Reviews</span>
      </section>
      <section className="review-img-text">
        <div>
          <img src={star} alt="" />
        </div>
        <p>Here’s what our esteemed customer has to say about us.</p>
      </section>
      <section className="Total-review-container">
        <section className="review-container">
          <div className="review-pic">
            <img src={pic1} alt="review-pics" />
          </div>
          <div className="review-texts">
            <h3>James Chukwu</h3>
            <div className="review-stars">
              <img src={stars} alt="star-icon" />
              <img src={stars} alt="star-icon" />
              <img src={stars} alt="star-icon" />
              <img src={stars} alt="star-icon" />
              <img src={stars} alt="star-icon" />
            </div>
            <span>
              A friend recommended Lasom to me. I got a ring to
              <br /> propose to my girlfriend from there. <br />
              She said YES!!.
            </span>
          </div>
        </section>
        <section className="review-container">
          <div className="review-pic">
            <img src={pic2} alt="review-pics" />
          </div>
          <div className="review-texts">
            <h3>Linda Jones</h3>
            <div className="review-stars">
              <img src={stars} alt="star-icon" />
              <img src={stars} alt="star-icon" />
              <img src={stars} alt="star-icon" />
              <img src={stars} alt="star-icon" />
              <img src={stars} alt="star-icon" />
            </div>
            <span>
              I got my Bridal jewelry set from Lasom. It transformed <br /> me
              into the most beautiful bride in the world.
            </span>
          </div>
        </section>
        <section className="review-container">
          <div className="review-pic">
            <img src={pic3} alt="review-pics" />
          </div>
          <div className="review-texts">
            <h3>Sherry Cole</h3>
            <div className="review-stars">
              <img src={stars} alt="star-icon" />
              <img src={stars} alt="star-icon" />
              <img src={stars} alt="star-icon" />
              <img src={stars} alt="star-icon" />
              <img src={stars} alt="star-icon" />
            </div>
            <span>
              Looking Elegant has always being a goal of mine.
              <br /> That goal was achieved when I started <br />
              shopping at Lasom.
            </span>
          </div>
        </section>
      </section>
      <div className="star-last">
        <img src={star} alt="" />
      </div>
    </section>
  );
}

export default reviews;
