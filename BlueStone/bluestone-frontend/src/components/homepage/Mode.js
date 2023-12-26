import "./index1.css";
import cardlogo from"../image/card logo.png";
import upilogo from"../image/upi logo.png";
import codlogo from"../image/cod logo.png";
import Footer from "../footer/footer";
function Mode() {
  return (
    <>
      <br />
      <br />
      <br />
      <section className="categories" id="categories">
    <h1 className="heading">
      <span>select mode of payment</span>
    </h1>
    <br /><br />
      <br />
      <br />
    <div className="box-container">
      <div className="box">
        <a href="/Card">
          <img src={cardlogo} />
        </a>
        <h3>card</h3>
        <p>Sorry! out of service</p>
      </div>
      <div className="box">
        <a href="/Upi">
        <img src={upilogo} />
        </a>
        <h3>upi</h3>
      </div>
      <div className="box">
        <a href="/Booking">
        <img src={codlogo} />
        </a>
        <h3>Cash on delivery</h3>
      </div>
    </div>
  </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/*footer section starts here..*/}
     <Footer />
      {/*footer section ends here..*/}
      {/* custom js file link  */}
    </>
  );
}

export default Mode;
