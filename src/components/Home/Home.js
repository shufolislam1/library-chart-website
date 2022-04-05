import { Link } from "react-router-dom";
import useReview from "../../hooks/useReview";
import "./Home.css";
import Review from "../Review/Review";

const Home = () => {
  const [reviews, setReviews] = useReview();

  // console.log(reviews)

  return (
    <div className="home-container">
      {/* {
        console.log(reviews)
      } */}

      <div className="home-text">
        <h1>Find Unique And Popular Books!</h1>
        <h1>In Your Favourite Book Store...</h1>
        <p className="home-p">
          Books are our all time friends.And it is one of the most valuable
          thing in our life.You can find any kind of books in our store.So, find
          your desired book and grow your knowledge by reading book.We also do
          home delivery.If needed, Please let us Know.
        </p>
        <button className="order-btn">Order Now</button>
      </div>
      <div className="home-img">
        <img
          src="http://www.sup.org/img/covers/large/pid_32708.jpg"
          alt=""
        ></img>
      </div>
      <div>
        <h1>CUSTOMER REVIEW</h1>
        <Link to="/reviews">
          <button className="order-btn">see all reviews</button>
        </Link>
      </div>
      <div className="review-design-parent">
      {
        reviews.slice(0, 3).map(rev => <Review
          rev={rev}
        ></Review>)
      }
      </div>
    </div>
  );
};

export default Home;
