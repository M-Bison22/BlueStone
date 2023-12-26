import Navbar from "../Navbar/Navbar";
import "../homepage/index1.css";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";
import { useDispatchCart, useCart } from "../ContextReducer";
function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  return (
    <>
    {console.log(data)}
      <Navbar />
      {/* header section ends */}
      <section
        className="categories"
        id="categories"
        style={{ marginTop: "5%" }}
      >
        <h1 className="heading">
          <span>Your Cart</span>
        </h1>
        <div className="box-container">
          {data.map((product) => {
            <div className="box">
              <h3>{product.productName}</h3>
              <p>₹{product.productPrice}</p>
              <a href="" className="btn">
                <i class="fa-solid fa-trash-can fa-beat-fade"></i>
              </a>
            </div>;
          })}
        </div>
      </section>
      <a href="" className="btn" style={{ float: "right", marginRight: "5%" }}>
        Check Out
      </a>
    </>
  );
}
export default Cart;
