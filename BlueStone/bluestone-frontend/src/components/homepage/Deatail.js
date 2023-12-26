import "./index1.css";
import pic1 from"../image/pic1.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/footer";
function Deatail() {
    return (
        <>
{/* Header Start */}
<Navbar/>
{/* header end */}
<br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
<div className="swiper-slide box">
      <img src={pic1} />
      <p>
        {" "}
        Lorem ipsum dolor sit, amet consectur adipisicin elit Unde sunt
        fugiat dolore ipsum id est maxime ad tempore quasi tenetur
      </p>
      <h3>$500</h3>
      <div className="starts">
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star" />
        <i className="fas fa-star-half-alt" />
      </div>
      
    </div>
    <a href="" className="btn" style={{ marginRight :"5%"}}>
          buy now
        </a>
        <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
{/* Footer Start*/}
<Footer/>
  
</>
);
}

export default Deatail;
