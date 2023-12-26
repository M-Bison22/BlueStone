import "./index1.css";
function Card() {
  return (
    <>
    <section className="features" id="features">
    <h1 className="heading">
      <span>fill your card details here</span>
    </h1>
    <div className="box-container">
      <div className="box">
        <form action="/Booking" style={{ fontSize: 20, color: "#6218e2" }}>
        <div>
          <label for="card number">Card Number</label>
          <input type="tel" name="card" placeholder="0000-0000-0000-0000" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}" required style={{ marginLeft:"97px", color: "#6218e2"}}/>
        </div>
        <div>
          <label for="name">name on card</label>
          <input type="text" name="name" placeholder="name" required style={{ marginLeft:"84px", color: "#6218e2"}}/>
        </div>
        <div>
          <label for="pincode">CVV</label>
          <input type="password" name="pincode" placeholder="XXX" required maxLength={3} minLength={3} style={{ marginLeft:"191px", color: "#6218e2"}}/>
        </div>
        <div>
          <label for="date">date</label>
          <input type="month" name="date" required style={{ marginLeft:"186px", width:"244px", color: "#6218e2"}}/>
        </div>
        <button className="btn" type="submit">
          Pay
        </button>
      </form>
      </div>
    </div>
  </section>
    </>
  );
}

export default Card;
