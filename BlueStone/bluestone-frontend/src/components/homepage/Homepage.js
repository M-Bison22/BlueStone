import "./index1.css";

import Navbar from "../Navbar/Navbar";
import Banner from "../banner/Banner";
import Card from "../products/Card";
import Features from "../features/Features";
import Categories from "../Categories/Categories";
import Review from "../Review/Review";
import Footer from "../footer/footer";
import axios from "axios";
import { useEffect, useState } from "react";
function Homepage() {
  const fetchproductsUrl = "http://localhost:4000/api/data/allProucts";
  const [productsdata, setproducts] = useState([]);
  const loadData = async () => {
    let response = await fetch(fetchproductsUrl, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    response = await response.json();
    setproducts(response);

    console.log(productsdata);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <>
      <Navbar />
      {/* header section ends */}
      {/* banner section starts  */}
      <Banner />
      {/* banner section ends */}
      {/* features section starts  */}
      <Features />
      {/* features section ends */}
      {/* products section starts  */}
      <section className="categories" id="categories">
        <h1 className="heading">
          Our <span>Products</span>{" "}
        </h1>
        <div className="box-container">
          {productsdata !== [] ? (
            productsdata.slice(0, 3).map((data) => {
              return (
                <div key={data.productId}>
                  <Card
                    productName={data.productName}
                    productImage={data.productImage}
                    productPrice={data.productPrice}
                  ></Card>
                </div>
              );
            })
          ) : (
            <div>nosuch data</div>
          )}
        </div>
      </section>
      {/* products section ends */}
      {/*Categories section starts here..*/}
      <Categories />
      {/*Categories section ends here..*/}
      {/*Review section starts here..*/}
      <Review />
      {/*Review section ends here..*/}
      {/*footer section starts here..*/}
      <Footer />
    </>
  );
}

export default Homepage;
