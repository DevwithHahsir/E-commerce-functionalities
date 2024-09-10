/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useContext } from "react";
import counterContext from "./contextapi/countContext";
// Replace "./path/to/counterContext" with the actual path to the counterContext module

import CartPage from "./CartPage";
// Rest of the code...

function Navbar() {
const counter=useContext(counterContext)
  return (
    <>
      <div className="nav-container">
        <div className="nav-logo"></div>
        <div className="nav-items">
          <ul>
            <a href="">
              <li>Home</li>
            </a>
            <a href="">
              <li>Products</li>
            </a>
            <a href="">
              <li>About US</li>
            </a>
            <a href="">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <div className="cart">
          <button className="addcart"> <a href="./CartPage.jsx"> Cart {counter} </a></button>
        </div>
      </div>
    </>
  );
}
export default Navbar;
