import React, { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>عربة التسوق</h2>
  <div className=" container d-flex justify-content-center align-item-center">

  <div className=' row'>
      {cart.map((item, index) => (
        <div key={index} className="card col-md-4 mx-3" style={{ width: "18rem" }}>
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
    </div>
  );
};

export default Cart;
