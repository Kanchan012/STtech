import React from "react";
import "./Cart.css";
import Cartbag from "../assets/Homeimage/Cartbag.png";
function Cart() {
  return (
    <>
      <div className="Cartbag">
        <div>
          <h3>Cart</h3> <br />
          <p>0 Courses in cart</p>
        </div>

        <div className="bag">
          <img src={Cartbag} alt="cart" />
          <h4>Your Cart is Empty!</h4>
          <p>It looks like you haven't added any courses yet. Explore our wide range of exciting courses and start building your learning journey today!</p> <br />
          <button>Return to shop</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
