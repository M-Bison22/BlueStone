import "../homepage/index1.css";
import { useDispatchCart, useCart } from "../ContextReducer";
import { useState } from "react";

function Card(props) {
  return (
    <div className="box">
      <img src={props.productImage} alt="" />
      <h3>{props.productName}</h3>
      <div className="price"> &#8377;{props.productPrice}</div>
      
      <a href="/order" className="btn">Buy Now</a>
    </div>
  );
}
export default Card;
