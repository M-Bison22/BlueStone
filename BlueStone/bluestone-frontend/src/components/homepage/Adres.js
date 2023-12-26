import "./index1.css";
import {useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import Footer from "../footer/footer";
function Adres() {
  const [data, setData] = useState({
		address: "",
		city: "",
        pincode: "",
		phone: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:4000/users/orderadd";
			const { data: res } = await axios.post(url, data);
			navigate("/Mode");
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
    <Navbar/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="features" id="features">
    <h1 className="heading">
      <span>You are only one step away</span>
    </h1>
    <div className="box-container">
      <div className="box">
        <form onSubmit={handleSubmit} action="/Mode" style={{ fontSize: 20, color: "#6218e2" }}>
        <div>
          <label for="address">Address</label>
          <input type="text" name="address" placeholder="Your address" value={data.address} onChange={handleChange} required style={{ marginLeft:"97px", color: "#6218e2"}}/>
        </div>
        <div>
          <label for="city">City</label>
          <input type="text" name="city" placeholder="Your city" value={data.city} onChange={handleChange} required style={{ marginLeft:"140px", color: "#6218e2"}}/>
        </div>
        <div>
          <label for="pincode">Pincode</label>
          <input type="number" name="pincode" placeholder="Your Pincode" value={data.pincode} onChange={handleChange} required maxLength={6} style={{ marginLeft:"98px", color: "#6218e2"}}/>
        </div>
        <div>
          <label for="phone">Phone Number</label>
          <input type="number" name="phone" placeholder="+91 Your number" value={data.phone} onChange={handleChange} required minLength={10} maxLength={10} style={{ marginLeft:"30px", color: "#6218e2"}}/>
        </div>
        <button className="btn">
          Next
        </button>
      </form>
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
      {/*footer section starts here..*/}
<Footer />
      {/*footer section ends here..*/}
      {/* custom js file link  */}
    </>
  );
}

export default Adres;
