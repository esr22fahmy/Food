import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const handleCheckout = () => {
    console.log("done!");
  };

  return (<>
  
  <div className=" position-relative  vh-100">
      <h2 className=" p-3">عربة التسوق</h2>
      <div className=" container d-flex justify-content-center align-item-center ">
        <div className=" row">
          {cart.map((item, index) => (
            <div
              key={index}
              className="card col-md-4 mx-3"
              style={{ width: "18rem" }}
            >
              <img className="card-img-top " src={item.image} alt="Product" />
              <div className="card-body ">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">السعر: {item.price}</p>
                {/* <a href="#" className="btn btn-primary">


            </a> */}
              </div>
            </div>
          ))}
        </div>

    
      </div>

      {cart.length > 0 && (
          <Link
            className="btn btn-primary mt-5 position-absolute btnCheckout"
            to="/checkoutCom" 
          >
            Checkout
          </Link>
        )}
    </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </>
   
  );
};

export default Cart;
