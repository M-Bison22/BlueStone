import React, { useState } from "react";
// import logo from "../img/logo/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Deleteproduct() {

    const [data, setData] = useState({
        productId: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:4000/admins/api/deleteproducts";
            const { data: res } = await axios.post(url, data);
            navigate("/Dashboard");
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
        <div style={{ backgroundColor: "white" }}>
       
        <div  className="">
            <div className="container">
                <div className="row align-items-center justify-content-center min-vh-100">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card border-0 shadow rounded-3 my-5">
                            <div className="card-body p-4 p-sm-5">
                                <div className="d-flex justify-content-between">
                                    
                                    <h5 className="card-title text-center mb-5  fs-5" style={{ color: "white" }}>Delete Product</h5>
                                    <a href="/Dashboard" style={{ color: "#1898e2" }}><i class="fa-solid fa-house fs-4"></i></a>
                                </div>
                                <form onSubmit={handleSubmit}>

                                    <div className="form-floating mb-4 mt-4 fs-5">
                                        <input
                                            type="Name"
                                            className="form-control"
                                            id="floatingInput"
                                            placeholder="Product Id"

                                            value={data.productId}
                                            name = "productId"
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="floatingInput"  style={{ color: "white" }}>Product id</label>
                                    </div>

                                    <div className="d-grid">
                                        <button
                                            className="btn btn-primary btn-login text-uppercase fw-bold "
                                            type="submit"
                                            style={{
                                                backgroundColor: "#1898e2",
                                                color: "#fff",
                                                float: "right",
                                                borderRadius: "5px",
                                              }}
                                        >
                                            Delete
                                        </button>
                                        {error && <div className="error">{error}</div>}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Deleteproduct;