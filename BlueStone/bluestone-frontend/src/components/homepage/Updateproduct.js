import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import logo from "../img/logo/logo.png";
function Updateproduct() {
  const [data, setData] = useState({
    productId: "",
    productName: "",
    productDetails: "",
    productPrice: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://127.0.0.1:4000/admins/api/updateproducts";
      const { data: res } = await axios.post(url, data);
      navigate("/");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <>
      <section className="products" id="products">
        <div className="swiper product-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-around">
                  <h1 style={{ color: "#1898e2" }} className="h1">
                    UPDATE PRODUCT
                  </h1>
                </div>
                <div className="form-row ">
                  <label
                    style={{ color: "#1898e2" }}
                    htmlFor=""
                    className="col-4 txt-size"
                  >
                    Product Id
                  </label>
                  <div className="col-8">
                    <input
                      type="number"
                      className="form-control my-3 p-5 mb-5 "
                      placeholder="Number"
                      required
                      name="productId"
                      onChange={handleChange}
                      value={data.productId}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label
                    style={{ color: "#1898e2" }}
                    htmlFor=""
                    className="col-4 txt-size"
                  >
                    Title
                  </label>
                  <div className="col-8">
                    <input
                      type="text"
                      className="form-control my-3 p-5 mb-5"
                      placeholder="title"
                      required
                      name="productName"
                      value={data.productName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label
                    style={{ color: "#1898e2" }}
                    htmlFor=""
                    className="col-4 txt-size"
                  >
                    Details
                  </label>
                  <div className="col-8">
                    <textarea
                      className="form-control my-3 p-5 mb-5"
                      placeholder="Details"
                      rows="4"
                      cols="50"
                      required
                      name="productDetails"
                      value={data.productDetails}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label
                    style={{ color: "#1898e2" }}
                    htmlFor=""
                    className="col-4 txt-size"
                  >
                    Price
                  </label>
                  <div className="col-8">
                    <input
                      type="text"
                      className="form-control my-3 p-5 mb-5"
                      placeholder="Price"
                      required
                      name="productPrice"
                      value={data.productPrice}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-7">
                    <button
                      style={{
                        backgroundColor: "#1898e2",
                        color: "#fff",
                        float: "right",
                        borderRadius: "5px",
                      }}
                      className=" w-50 btn"
                    >
                      UPDATE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Updateproduct;
