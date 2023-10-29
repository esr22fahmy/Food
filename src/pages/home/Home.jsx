import { Link } from "react-router-dom";
import "./home.css";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from '../CartContext/CartContext';


const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);

  console.log(openMenu);
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="home   ">
      <div className="container-fluid">
      <Link  to="/cart"  className="   iconCart">
        <i className="fa-solid fa-cart-shopping text-dark"></i>
        </Link>
        <div className="row">
          <div className="col-lg-5  p-0">
            <div
              className={`right-section right-section-img  ${
                openMenu && "open"
              }`}
            >
              <div className="overlay centerHomeLeft">
                <button
                  className="btn open-icon"
                  onClick={() => {
                    setOpenMenu(!openMenu);
                  }}
                >
                  <i className="bi bi-grid-fill icon"></i>
                </button>

                <div className=" text-center ">
                <div className="" >
                  <img
                    src="/images/logo.jpg"
                    className="rounded-4 logo "
                    alt=""
                  />
                  <h2>منيو مطعم ايت اب</h2>
                  <p>
                    للمساعدة في تثبيت الطلبات.فقط اتصل على الرقم 07721244402
                  </p>
                  <div className="btns w-100 mx-auto">
                    {/* <button type="button" className="btn w-75 px-5 py-3 mb-2">
                      <Link className="order-btn" to="/order">
                        طلب داخلي
                      </Link>
                    </button> */}
                       <Link className="order-btn" to="/order">
                  <button type="button" className="btn w-75 px-5 py-3 mb-2">
                  طلب داخلي

                     </button>
                      </Link>
                    <button type="button" className="btn w-75 px-5 py-3 mb-2">
                      التوصيل
                    </button>
                  </div>
                  <div className="right-section-footer w-100 mt-5">
                    <div className="social-icons">
                      <i className="bi bi-facebook me-4"></i>
                      <i className="bi bi-camera me-4"></i>
                      <i className="bi bi-snapchat me-4"></i>
                      <i className="bi bi-tiktok me-4"></i>
                    </div>
                  </div>
                </div>
                </div>
              
              </div>
            </div>
          </div>
          <div className="col-lg-7 p-0">
            
            <div className={`left-section ${openMenu && "open"}`}>
              <div className="left-section-content text-center">
                
                <button
                  className="btn close-btn"
                  onClick={() => {
                    setOpenMenu(false);
                  }}

                >
                  
                  <i className="bi bi-x-lg mx-5"></i>
                </button>
                <img
                  src="/images/logo.jpg"
                  className="rounded-4 logo d-block m-auto"
                  alt=""
                />
                
                <div className="rating center-content d-inline-block m-auto rounded-4 my-4 ">
                  0.5<i className="bi bi-star-fill me-2"></i>
                </div>
                <ul className="nav-list">
                  <li> اتصل بنا</li>
                  {/* <li>الموقع </li>
                  <li> مصدر اللحوم</li>
                  <li>تقييم </li> */}
                  {/* <li className="active">انشاء حساب </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
