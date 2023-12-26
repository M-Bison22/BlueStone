import React from "react";
import styles from "./style.css";
import {useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Register() {
    const [data, setData] = useState({
		name: "",
		email: "",
        address: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:4000/users/register";
			const { data: res } = await axios.post(url, data);
			navigate("/Login");
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
        <div className="container">
            <div className="row align-items-center justify-content-center min-vh-100">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                        <div className="card-body p-4 p-sm-5">
                        <div className="d-flex justify-content-between">
                        {/* <img src={logo} height={50} width={50} className="pb-1"/> */}
                            <h5 className="card-title text-center mb-5  fs-5"><div style={{color: "white"}}>Register yourself</div></h5>
                            {/* <a href="/" style={{color:"black"}}><i class="fa-solid fa-house fs-4"></i></a> */}
                                </div>
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                <label htmlFor="floatingInput"><div style={{color: "white"}}>Name</div></label>
                                    <input
                                        type="Name"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="Name"
                                        name = "name"
                                        value={data.name}
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-floating mb-3">
                                <label htmlFor="floatingInput"><div style={{color: "white"}}>Email address</div></label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        name = "email"
                                        value={data.email}
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-floating mb-3">
                                <label htmlFor="floatingInput"><div style={{color: "white"}}>Address</div></label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        name = "address"
                                        value={data.address}
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-floating mb-3">
                                <label htmlFor="floatingPassword"><div style={{color: "white"}}>Password</div></label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        name = "password"
                                        value={data.password}
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-check mb-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue=""
                                        id="rememberPasswordCheck"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="rememberPasswordCheck"
                                    >
                                        <div style={{color: "white"}}>Remember Password</div>
                                    </label>
                                </div>
                                <div className="d-grid">
                                {error && <div className={styles.error_msg}>{error}</div>}
                                    <button
                                        className="btn btn-primary btn-login text-uppercase fw-bold mb-2 " type="submit" style={{color:"white"}}>
                                        Sign in
                                    </button>
                                </div>
                            </form>
                            <p style={{color:"white"}}>Already a user <a href="/Login"  style={{color:"white"}}>Login now</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Register;