import pic1 from"../image/pic1.png";
import pic2 from"../image/pic2.png";
import pic3 from"../image/pic3.png";
import pic4 from"../image/pic4.png";
import "../homepage/index1.css";
function Review() {
    return (
      <>
<section className="review" id="review">
<h1 className="heading">Review</h1>
<div className="swiper review-slider">
  <div className="swiper-wrapper">
    <div className="swiper-slide box">
      <img src={pic1} />
      <p>
        {" "}
        Lorem ipsum dolor sit, amet consectur adipisicin elit Unde sunt
        fugiat dolore ipsum id est maxime ad tempore quasi tenetur
      </p>
      <h3>John Doe</h3>
      <div className="starts">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
      </div>
    </div>
    <div className="swiper-slide box">
      <img src={pic2} />
      <p>
        {" "}
        Lorem ipsum dolor sit, amet consectur adipisicin elit Unde sunt
        fugiat dolore ipsum id est maxime ad tempore quasi tenetur
      </p>
      <h3>John Doe</h3>
      <div className="starts">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
      </div>
    </div>
    <div className="swiper-slide box">
      <img src={pic3} />
      <p>
        {" "}
        Lorem ipsum dolor sit, amet consectur adipisicin elit Unde sunt
        fugiat dolore ipsum id est maxime ad tempore quasi tenetur
      </p>
      <h3>John Doe</h3>
      <div className="starts">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
        <i className="fas fa-star-half-alt" />
        <i className="fas fa-star-half-alt" />
      </div>
    </div>
    <div className="swiper-slide box">
      <img src={pic4} />
      <p>
        {" "}
        Lorem ipsum dolor sit, amet consectur adipisicin elit Unde sunt
        fugiat dolore ipsum id est maxime ad tempore quasi tenetur
      </p>
      <h3>John Doe</h3>
      <div className="starts">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
        <i className="fas fa-star-half-alt" />
      </div>
    </div>
  </div>
</div>
</section>
  </>
  
  );
}

export default Review;
