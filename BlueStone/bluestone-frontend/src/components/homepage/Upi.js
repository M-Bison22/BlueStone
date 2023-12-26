import "./index1.css";
import qr from"../image/qr.png";
function Upi() {
  return (
    <>
    <br />
      <br />
      <br />
      <section className="categories" id="categories">
    <h1 className="heading">
      <span>Upi</span>
    </h1>
    <br /><br />
      <br />
      <br />
    <div className="box-container">
      <div className="box">
          <img src={qr}
          style={{ width: 300, height: 300 }}/>
        <h3></h3>
        <p>Scan for payment</p>
        continue shopping   <a href="/">Home</a>
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
    </>
  );
}

export default Upi;
