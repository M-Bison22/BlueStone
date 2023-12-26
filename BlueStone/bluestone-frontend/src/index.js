import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from "./reportWebVitals";
import Homepage from "./components/homepage/Homepage";
import Dashboard from "./components/homepage/Dashboard";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.min.js";

import Mens from "./components/Mens/Mens";
import Login from "./components/homepage/Login";
import Register from "./components/homepage/Register";
import Mode from "./components/homepage/Mode";
import ForgetPassword from "./components/homepage/Forgetpassword";

import Updateproduct from "./components/homepage/Updateproduct";
import Addproduct from "./components/homepage/Addproduct";
import Adminlogin from "./components/homepage/Adminlogin";
import Cart from "./components/Cart/Cart";
import Card from "./components/homepage/CreCard";
import Upi from "./components/homepage/Upi";
import Adres from "./components/homepage/Adres";

import Booking from "./components/homepage/Booking";

import { CartProvider } from "./components/ContextReducer";
import Women from "./components/Women/Women";

import Child from "./components/Child/Child";
import Deleteproduct from "./components/homepage/Deleteproduct";
const user = localStorage.getItem("token");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <Router>
      <Routes>
        {user && <Route path="/Dashboard" exact element={<Dashboard />} />}
        {user && <Route path="/Addproduct" exact element={<Addproduct />} />}
        {user && (
          <Route path="/Updateproduct" exact element={<Updateproduct />} />
        )}
        {user && (
          <Route path="/Deleteproduct" exact element={<Deleteproduct />} />
        )}
        <Route
          path="/Dashboard"
          exact
          element={<Navigate replace to="/Adminlogin" />}
        />
        <Route
          path="/Addproduct"
          exact
          element={<Navigate replace to="/Adminlogin" />}
        />
        <Route
          path="/Updateproduct"
          exact
          element={<Navigate replace to="/Adminlogin" />}
        />
        <Route
          path="/Deleteproduct"
          exact
          element={<Navigate replace to="/Adminlogin" />}
        />
        <Route path="/Adminlogin" exact element={<Adminlogin />} />





        {user && <Route path="/" exact element={<Homepage />} />}
        {user && <Route path="/Cart" exact element={<Cart />} />}
        {user && <Route path="/Women" exact element={<Women />} />}
        {user && <Route path="/Mens" exact element={<Mens />} />}
        {user && <Route path="/Child" exact element={<Child />} />}
        {user && <Route path="/Mode" exact element={<Mode />} />}


        <Route path="/Login" exact element={<Login />} />
        <Route path="/Register" exact element={<Register />} />
        <Route path="/ForgetPassword" exact element={<ForgetPassword />} />
        <Route path="/" exact element={<Navigate replace to="/Login" />} />
        <Route path="/Cart" exact element={<Navigate replace to="/Login" />} />
        <Route path="/Women" exact element={<Navigate replace to="/Login" />} />
        <Route path="/Mens" exact element={<Navigate replace to="/Login" />} />
        <Route path="/Child" exact element={<Navigate replace to="/Login" />} />
        <Route path="/Mode" exact element={<Navigate replace to="/Login" />} />
        <Route path="/Card" exact element={<Card/>} />
        <Route path="/Upi" exact element={<Upi/>} />
        <Route path="/Booking" exact element={<Booking/>} /> 
        <Route path="/order" exact element={<Adres/>} />
      </Routes>
    </Router>
  </CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
