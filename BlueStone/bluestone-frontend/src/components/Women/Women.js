import "../homepage/index1.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../footer/footer";
function Women() {
  const [products, setProducts] = useState([]);
  const fetchproductsUrl = "http://localhost:4000/api/data/allProucts/Women";
  const fetchproducts = async (url) => {
    const results = await axios.get(url);
    const getproductsData = await results.data;
    setProducts(getproductsData);
  };
  useEffect(() => {
    fetchproducts(fetchproductsUrl);
  }, []);
  return (
    <>
      {/* header section starts  */}
      <Navbar />
      {/* header section ends */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="heading">
        <span>WOMENS </span>
      </h1>
      <section className="categories" id="categories">
        <div className="box-container">
          {products.map((data) => {
            const {
              productId,
              productName,
              productImage,
              productPrice
            } = data;
            return (
              <div className="box" key={productId}>
                <a href="">
                  <img src={productImage} />
                </a>
                <h3>{productName}</h3>
                <p>₹{productPrice}</p>
                <a href="/order" className="btn">
                Buy Now
                </a>
              </div>
            );
          })}
        </div>
      </section>
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

export default Women;
