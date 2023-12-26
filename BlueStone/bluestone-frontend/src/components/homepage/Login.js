import React from "react";
import { useState } from "react";
import axios from "axios";
import styles from "./style.css";
function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/users/login";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data); //res= response
      window.location = "/";
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
                <h5 className="card-title text-center mb-5  fs-5">
                  <div style={{ color: "white" }}>Sign In</div>
                </h5>
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      name="email"
                      value={data.email}
                      required
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingInput">
                      <div style={{ color: "white", fontSize: "10px" }}>
                        Email address
                      </div>
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                      name="password"
                      value={data.password}
                      required
                      onChange={handleChange}
                    />
                    <label htmlFor="floatingPassword">
                      <div style={{ color: "white" }}>Password</div>
                    </label>
                  </div>
                  <div className="mb-3">
                    {/* <a href="/Forgetpassword" style={{ color: "white" }}>
                      Forget Password
                    </a> */}
                  </div>
                  <div className="d-grid">
                    {error && <div className={styles.error_msg}>{error}</div>}
                    <button
                      className="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
                <p style={{ color: "white" }}>
                  Not a user{" "}
                  <a href="/register" style={{ color: "white" }}>
                    Register now
                  </a>
                </p>
                <a href="/Adminlogin" style={{ color: "white" }}>
                  already a admin{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
