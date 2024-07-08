import "./../Styles/customerreview.css";
import rate5 from "./../../images/rateimages/rate5.png";
import rate4 from "./../../images/rateimages/rate4.png";
import rate3 from "./../../images/rateimages/rate3.png";
import rate2 from "./../../images/rateimages/rate2.png";
import rate1 from "./../../images/rateimages/rate1.png";
import starx from "./../../images/reviewimages/starx.png";
import stars from "./../../images/reviewimages/stars.png";
// import posts from "./../../images/reviewimages/posts.png";

function CustomerReview() {
  return (
    <section className="customer-review-div">
      <div className="div1-sub1">
        <div className="div2-sub2">
          <div className="rate-no">
            <span>4.5</span>
            <p>out of 5</p>
            <div className="rating-stars">
              <img src={stars} alt="stars" />
              <img src={stars} alt="stars" />
              <img src={stars} alt="stars" />
              <img src={stars} alt="stars" />
              <img src={starx} alt="stars" />
            </div>
            <br />
            <h3>2 Reviews</h3>
          </div>
          <div className="rate-lines">
            <img src={rate5} alt="stars" />
            <img src={rate4} alt="stars" />
            <img src={rate3} alt="stars" />
            <img src={rate2} alt="stars" />
            <img src={rate1} alt="stars" />
          </div>
        </div>
        <div className="total-reviews-comment">
          <span>See more</span>
          <div className="reviews-comment">
            <p>P</p>
            <div className="personal-review">
              <h4>Patrick Chukwudifu</h4>
              <small>October, 1 2024</small>
            </div>
            <div>
              <div className="presonal-review-stars">
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
              </div>
              <small>Lovely, just the way it is.</small>
            </div>
          </div>
          <div className="reviews-comment">
            <p>P</p>
            <div className="personal-review">
              <h4>Patrick Chukwudifu</h4>
              <small>October, 1 2024</small>
            </div>
            <div>
              <div className="presonal-review-stars">
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
                <img src={stars} alt="" />
              </div>
              <small>Lovely, just the way it is.</small>
            </div>
          </div>
        </div>
      </div>

      <section>
        <h3
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "1rem",
          }}
        >
          Write a review
        </h3>
        <div>
          <label
            style={{
              fontSize: "1.6rem",
              fontWeight: "700",
              marginBottom: "1rem",
            }}
          >
            Rating
          </label>
          <br />
          <input id="bingo" type="text" placeholder="5 - Excellent" />
        </div>
        <div>
          <label
            style={{
              fontSize: "1.6rem",
              fontWeight: "700",
              marginBottom: "1rem",
            }}
          >
            Reviews
          </label>
          <br />
          <input id="bingo2" type="text" placeholder="Leave a review here" />
        </div>
        <button
          style={{
            backgroundColor: "rgba(209, 154, 100, 1)",
            border: "none",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            borderRadius: "5px",
            fontSize: "1.6rem",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          Post
        </button>
      </section>
    </section>
  );
}

export default CustomerReview;
