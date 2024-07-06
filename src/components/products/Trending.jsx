import "./../Styles/trending.css";
import pic1 from "./../../images/trendingimages/pic1.png";
function Trending() {
  return (
    <section>
      <section className="trending-section">
        <span>Trending Now</span>
      </section>
      <section>
        <div className="trending-item">
          <img src={pic1} alt="Trending Item" />
        </div>
      </section>
    </section>
  );
}

export default Trending;
