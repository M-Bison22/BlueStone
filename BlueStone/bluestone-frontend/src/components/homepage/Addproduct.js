import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./index1.css";
// import logo from "../img/logo/logo.png";
function Addproduct() {
  const [data, setData] = useState({
    productId: "",
    productName: "",
    productDetails: "",
    productImage: "",
    productCategory: "",
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
      const url = "http://127.0.0.1:4000/admins/api/addproducts";
      const { data: res } = await axios.post(url, data);
      navigate("/Addproduct");
      console.log(res.message);
      setData("");
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
                    ADD PRODUCT
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
                  <label
                    style={{ color: "#1898e2" }}
                    htmlFor=""
                    className="col-4 txt-size"
                  >
                    Product Image Link
                  </label>
                  <div className="col-8">
                    <input
                      type="text"
                      className="form-control my-3 p-5 mb-5"
                      placeholder="News Image Link"
                      required
                      name="productImage"
                      value={data.productImage}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <label
                      style={{ color: "#1898e2" }}
                      htmlFor=""
                      className="col-4 txt-size m-3"
                    >
                      Product Category
                    </label>
                <div className="category-wrap">
                  
                  <div>
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        id="customRadio2"
                        name="productCategory"
                        className="radio-input"
                        value="Men"
                        onChange={handleChange}
                      />
                      <label
                        style={{ color: "#1898e2" }}
                        className="txt-size"
                        htmlFor="customRadio2"
                      >
                        Men
                      </label>
                    </div>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      id="customRadio3"
                      name="productCategory"
                      className="radio-input"
                      value="Women"
                      onChange={handleChange}
                    />
                    <label
                      style={{ color: "#1898e2" }}
                      className="txt-size"
                      htmlFor="customRadio3"
                    >
                      Women
                    </label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      id="customRadio4"
                      name="productCategory"
                      className="radio-input"
                      value="Child"
                      onChange={handleChange}
                    />
                    <label
                      style={{ color: "#1898e2" }}
                      className="txt-size"
                      htmlFor="customRadio4"
                    >
                      Child
                    </label>
                  </div>
                </div>

                <div className="form-row">
                  <div className="col-lg-7">
                    <button
                      style={{
                        backgroundColor: "#1898e2",
                        float: "right",
                        borderRadius: "5px",
                      }}
                      className=" w-50 btn"
                    >
                      Add
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
export default Addproduct;
